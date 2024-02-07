import React from "react";
// import navLogo from "../assets/nav-logo.svg";
import navLogo from "../assets/logo.png";
import navProfile from "../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="shadow-md fixed w-full z-50 bg-white">
      <div className="container mx-auto py-2 px-4 flex justify-between items-center  ">
        <img className="h-10 md:h-14 " src={navLogo} alt="" />
        <img src={navProfile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
