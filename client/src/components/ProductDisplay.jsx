import React from "react";
import PropTypes from "prop-types";
import startDullIcon from "../Assets/star_dull_icon.png";
import startIcon from "../Assets/star_icon.png";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../context/CartContext";

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, category, image, old_price, new_price } = product;
  return (
    <div className="grid grid-cols-2 gap-4 my-10 mb-20">
      <div className="flex gap-4">
        <div className=" flex flex-col gap-4">
          <img className="w-32 " src={image} alt="" />
          <img className="w-32" src={image} alt="" />
          <img className="w-32" src={image} alt="" />
          <img className="w-32" src={image} alt="" />
        </div>
        <div>
          <img className="w-[550px] object-cover" src={image} alt="" />
        </div>
      </div>
      <div className="px-4  flex flex-col gap-2 xl:gap-8">
        <h1 className="text-2xl xl:text-4xl">{name}</h1>
        <div className="flex items-center gap-4">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startDullIcon} alt="" />
          <p>(90)</p>
        </div>
        <div className="flex gap-5">
          <div className=" text-xl line-through text-red-700">${old_price}</div>
          <div className=" text-xl text-green-700">${new_price}</div>
        </div>
        <div className="xl:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          animi consequuntur aliquid sapiente ab enim deleniti velit officia
          perspiciatis labore!
        </div>
        <div>
          <h1 className="text-xl">Select Size :</h1>
          <div className="flex gap-5 mt-4">
            <div className="px-4 py-2 border-2 cursor-pointer">S</div>
            <div className="px-4 py-2 border-2 cursor-pointer">M</div>
            <div className="px-4 py-2 border-2 cursor-pointer">L</div>
            <div className="px-4 py-2 border-2 cursor-pointer">XL</div>
            <div className="px-4 py-2 border-2 cursor-pointer">XXL</div>
          </div>
        </div>
        <button
          className="w-[200px] bg-[#ff5353] h-12 rounded-lg text-white text-xl font-medium hover:bg-[#ff5353e7]  active:bg-red-900"
          onClick={() => dispatch(setAddToCart(id))}
        >
          ADD TO CART
        </button>
        <p>
          <span className="font-bold">Category:</span> Women, T-Shirt,Crop Top{" "}
          <br />
          <span className="font-bold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDisplay;
