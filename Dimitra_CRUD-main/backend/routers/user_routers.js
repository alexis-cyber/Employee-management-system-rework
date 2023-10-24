const express = require("express");
let router = express.Router();
let verifyToken = require("../middleware/auth");
let { signUp, login, testToken } = require("../controllers/user_controller");

router.post("/signUp", signUp);

router.post("/login", login);

router.get("/token", verifyToken, testToken);

module.exports = router;
