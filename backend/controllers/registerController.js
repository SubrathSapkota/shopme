const User = require("../models/registerSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let existingUserCheck = await User.findOne({ email: email });

    if (existingUserCheck) {
      res.status(400).json({
        success: false,
        error: "User already exists. Please sign in with another email.",
      });
      return;
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = await User.create({
      name,
      email,
      password,
      cartData: cart,
    });

    await user.save();

    const jwtData = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(jwtData, "secret_ecom");

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser };
