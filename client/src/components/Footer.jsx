import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo copy.png";
import instagram from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import pinteerest from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="conteiner flex flex-col items-center gap-8 mb-5">
      <div className="flex items-center gap-3 ">
        <img className="h-20" src={logo} alt="" />
        <p className=" text-5xl ">SHOP ME</p>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Company</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/">Offices</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <img src={instagram} alt="" />
        <img src={whatsapp} alt="" />
        <img src={pinteerest} alt="" />
      </div>
      <hr className="container w-full border-2 rounded-full"/>
      <div>
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
