import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../context/ShopContext";

const Item = ({ id, image, name, newPrice, oldPrice }) => {
  const dispatch = useDispatch();

  const handleImageClick = () => {
    dispatch(setSingleProduct(id));
    window.scrollTo(0, 0);
  };
  return (
    <div className="px-2 py-2 flex flex-col gap-4">
      <Link to={`/product/${id}`}>
        <img
          className="rounded-lg  hover:scale-105 duration-300 "
          src={image}
          alt=""
          onClick={handleImageClick}
        />
      </Link>
      <p className="font-bold">{name}</p>
      <div className="flex gap-5">
        <div className="text-green-700">NRP {newPrice}</div>
        <div className="line-through text-red-500">NRP {oldPrice}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.any,
  name: PropTypes.string,
  newPrice: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default Item;
