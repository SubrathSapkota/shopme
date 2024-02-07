import React, { useEffect } from "react";
import PropTypes from "prop-types";
import dropDown from "../Assets/dropdown_icon.png";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../context/ShopContext";
import Item from "../components/Item";

const ShopCategory = ({ banner, category }) => {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.shop.products);


  useEffect(() => {
    dispatch(setCategory(category));
  }, [dispatch, category]);

  return (
    <div className="container m-auto flex flex-col items-center gap-4 my-6">
      <img src={banner} alt="" />
      <div className="w-full flex justify-between ">
        <p>
          <span>Showing 1-12</span> out of 36 prodcuts
        </p>

        <button className="flex items-center gap-2 border-2 px-4 py-2 rounded-full">
          Sort By <img src={dropDown} alt="" />{" "}
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {allProduct.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
      <button className="flex items-center gap-2 border-2 px-4 py-2 rounded-full">
        Explore More <img src={dropDown} alt="" />{" "}
      </button>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.any,
  category: PropTypes.string,
};

export default ShopCategory;
