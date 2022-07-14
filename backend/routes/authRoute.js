const express = require("express");
const router = express.Router();
const userLogin = require("../controllers/loginController");
const userSignup = require("../controllers/signupController");

router.get("/login", userLogin);
router.post("/signup", userSignup);

module.exports = router;
