const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required "],
    },
    password: {
      type: String,
      required: [true, "password is required "],
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", registerSchema);
