const express = require("express");
const {
  postProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productController");

const router = express.Router();

router.post("/addproucts", postProduct);
router.post("/deleteproducts", deleteProduct);
router.get("/getallproducts", getAllProducts);

module.exports = router;
