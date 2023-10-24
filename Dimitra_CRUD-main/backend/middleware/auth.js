const jwt = require("jsonwebtoken");
require("dotenv").config();

let verifyToken = (req, res, next) => {
    try {
            let clientToken = req.headers.authorization.split(" ")[1];
            if (!clientToken) {
                return res.status(403).send({ msg: "Token is not exist" });
        } else { 
            let verifiedToken = jwt.verify(
                clientToken,
                process.env.PRIVATE_KEY
            );
            if (!verifiedToken) {
                return res.status(401).send({ msg: "Not Authorized" });
            } else {
              req.user = verifiedToken;
                next();
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "internal server error." });
    }
};

module.exports = verifyToken;
