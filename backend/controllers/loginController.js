const User = require("../models/registerSchema");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const userAuthentication = req.body.password === user.password;
      if (userAuthentication) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        return res.json({ success: true, token, message: "Login successful" });
      } else {
        res.json({ success: false, error: "Wrong Password" });
      }
    } else {
      return res.json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { login };
