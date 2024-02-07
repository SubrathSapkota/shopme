const express = require("express");
const { registerUser } = require("../controllers/registerController");
const {login} = require("../controllers/loginController");

const router = express.Router();

router.post("/register", registerUser);
router.post('/login',login)

module.exports = router;
