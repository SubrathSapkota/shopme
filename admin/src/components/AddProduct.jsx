import React, { useState } from "react";
import uploadArea from "../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    username: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changehandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    try {
      await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          responseData = data;
        });

      if (responseData.success) {
        product.image = responseData.image_url;
        await fetch("http://localhost:5000/product/addproucts", {
          method: "POST",
          headers: {
            Accept: "Application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            data.success ? alert("Product Added") : alert("Failed to add.");
          });
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      return;
    }
  };
  return (
    <div className=" h-screen  w-full mx-5 flex flex-col gap-5">
      <div className="h-full mt-[100px] mb-5 px-10 py-10 bg-white">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">Product title</p>
          <input
            className="max-w-[650px] h-14 px-5 text-2xl rounded-md border-2"
            type="text"
            name="username"
            placeholder="Add Product"
            value={productDetails.username}
            onChange={changehandler}
          />
        </div>
        <div className="w-full flex gap-5">
          <div>
            <p className="text-2xl pb-5">Price</p>
            <input
              className="h-14 px-5 text-2xl rounded-md border-2"
              type="text"
              name="old_price"
              placeholder="Type old price"
              value={productDetails.old_price}
              onChange={changehandler}
            />
          </div>
          <div>
            <p className="text-2xl pb-5">Offer Price</p>
            <input
              className="h-14 px-5 text-2xl rounded-md border-2"
              type="text"
              name="new_price"
              placeholder="Type Offer price"
              value={productDetails.new_price}
              onChange={changehandler}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-2xl">Product Category</p>
          <select
            name="category"
            className="w-48 h-14 px-5 rounded-md text-2xl border-2"
            value={productDetails.category}
            onChange={changehandler}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div>
          <label htmlFor="fileInput">
            <img
              className="h-40 w-40 object-cover rounded-md"
              src={image ? URL.createObjectURL(image) : uploadArea}
              alt=""
            />
          </label>
          <input
            type="file"
            name="image"
            id="fileInput"
            className="hidden"
            onChange={imageHandler}
          />
        </div>
        <button
          className="bg-[#6079ff] py-3 rounded-md w-40 text-2xl text-white"
          onClick={() => {
            addProduct();
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
