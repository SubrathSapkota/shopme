import React from "react";
import PropTypes from "prop-types";
import arrow from "../Assets/breadcrum_arrow.png";

const Breadcrun = ({ category, productName }) => {
  return (
    <div className="flex items-center gap-2">
      HOME <img className="h-4" src={arrow} alt="" /> SHOP
      <img className="h-4" src={arrow} alt="" /> {category}
      <img className="h-4" src={arrow} alt="" /> {productName}
    </div>
  );
};

Breadcrun.propTypes = {
    category: PropTypes.string,
  productName: PropTypes.string,
};

export default Breadcrun;
