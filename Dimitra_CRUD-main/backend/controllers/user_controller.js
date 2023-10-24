const user = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let signUp = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.send({
                msg: "Please fill out all required fields: name, email, and password",
            });
        }
        let found = await user.findOne({ email, password });
        if (found) {
            return res.send({
                msg: "email is already exist, login or signUp with a new email.",
            });
        }
        let hash_password = await bcrypt.hash(password, 10);
        await user.create({ name, email, password: hash_password });
        return res.send({ msg: "Sign up successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            msg: "internal server error, please try again later.",
        });
    }
};

// login
let login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(402)
                .send({ msg: "Both email and password are require." });
        }
        let oldUser = await user.findOne({ email });
        if (oldUser) {
            let validPassword = await bcrypt.compare(
                password,
                oldUser.password
            );
            if (!validPassword) {
                return res.status(401).send({ msg: "Invalid password" });
            } else {
                // generate the token
                let token = jwt.sign(
                    { email: oldUser.email, id: oldUser._id },
                    process.env.PRIVATE_KEY,
                    { expiresIn: "2h" }
                );
                return res
                    .status(200)
                    .send({ msg: "Login successfully, Welcome!", token });
            }
        } else {
            return res.status(404).send({
                msg: "Invalid email, user not found. Please signUp first.",
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send(
                "Can not login please try again later, internal server error."
            );
    }
};

let testToken = async (req, res) => {
    let { email } = req.body;
    res.send(`Welcome ${email}`);
};

module.exports = { signUp, login, testToken };
