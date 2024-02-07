const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id:{
        type: Number,
        required: [true, "id is required "],
    },
    username: {
      type: String,
      required: [true, "name is required "],
    },
    category: {
      type: String,
      required: [true, "password is required "],
    },
    image:{
      type: String,
      required:[true, "image is required "],
    },
    new_price:{
        type:Number,
        required: [true, "name is required "],
    },
    old_price:{
        type:Number,
        required: [true, "name is required "],
    },
    date:{
        type:Date,
        default: Date.now,
    },
    acilable:{
        type:Boolean,
        default:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
 