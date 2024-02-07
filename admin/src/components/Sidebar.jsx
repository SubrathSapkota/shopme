import React from "react";
import { NavLink } from "react-router-dom";
import addproductIcon from "../assets/Product_Cart.svg";
import listProductIcon from "../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="max-w-[350px] h-screen w-full pt-[99px] py-4 px-10 shadow-md bg-white border-t-2">
      <div className="flex flex-col gap-10 mt-5">
        <NavLink to={"/addproduct"}>
          <div className="flex justify-center items-center gap-4 bg-stone-100 py-4 rounded-xl ">
            <img src={addproductIcon} alt="" />
            <p>Add Product</p>
          </div>
        </NavLink>
        <NavLink to={"/listproduct"}>
          <div className="flex justify-center items-center gap-4 bg-stone-100 py-4 rounded-xl ">
            <img src={listProductIcon} alt="" />
            <p>Product List</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
