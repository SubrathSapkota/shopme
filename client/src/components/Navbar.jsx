import React, { useState } from "react";
// import logo from "../Assets/logo.png";
import logo from "../Assets/logo copy.png";
import cartIcon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const cartTotal = useSelector((state) => state.cart.cartItems);
  return (
    <div className="container m-auto h-20 px-5 flex justify-between items-center ">
      <div className="flex items-center gap-3 ">
        <img className="h-10" src={logo} alt="" />
        <p className=" text-xl font-bold">SHOPME</p>
      </div>
      <ul className="hidden lg:flex items-center gap-10 text-lg">
        <li
          className="cursor-pointer hover:scale-105"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <NavLink to="/">Shop</NavLink>
          {menu === "shop" ? (
            <hr className="w-[100%] h-1 bg-red-500 rounded-xl" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer hover:scale-105"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <NavLink to="/mens">Mens</NavLink>{" "}
          {menu === "mens" ? (
            <hr className="w-[100%] h-1 bg-red-500 rounded-xl" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer hover:scale-105"
          onClick={() => {
            setMenu("womens");
          }}
        >
          <NavLink to="/womens">Womens</NavLink>{" "}
          {menu === "womens" ? (
            <hr className="w-[100%] h-1 bg-red-500 rounded-xl" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="cursor-pointer hover:scale-105"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <NavLink to="/kids">Kids</NavLink>{" "}
          {menu === "kids" ? (
            <hr className="w-[100%] h-1 bg-red-500 rounded-xl" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex gap-10">
        <div className="border-[1px] border-black flex items-center justify-center rounded-full px-6 h-10 active:bg-slate-200">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
        <div className="relative">
          <NavLink to="/cart">
            <img src={cartIcon} alt="Cart" />
          </NavLink>

          <div className="absolute top-0 -right-2 w-[22px] h-[22px] flex justify-center items-center bg-red-500 rounded-full text-white font-bold">
            {cartTotal.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
