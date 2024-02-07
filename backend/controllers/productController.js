const Product = require("../models/productSchema");

//@desc Post All contacts
//@route POST /product/addproducts
//@access public
const postProduct = async (req, res) => {
  const { username, category, image, new_price, old_price } = req.body;

  try {
    const products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_prodcut = last_product_array[0];
      id = last_prodcut.id + 1;
    } else {
      id = 1;
    }

    const product = await new Product({
      id: id,
      username,
      category,
      image,
      new_price,
      old_price,
    });
    await product.save();
    console.log("saved");
    res.status(200).json({
      success: true,
      username: username,
    });
    console.log(product);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

//@desc Delete the product
//@route POST /product/deleteproducts
//@access public
const deleteProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    username: req.body.username
  })
};

//@desc Createing API to get all Products
//@route GET /product/allproducts
//@access public
const getAllProducts = async (req,res)=>{
    const products = await Product.find({});
    console.log('All Products fetched');
    res.status(200).json({products})
}

module.exports = { postProduct,deleteProduct,getAllProducts};
