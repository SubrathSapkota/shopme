import React from "react";
import exclusiveImage from "../Assets/exclusive_image.png";

const OfferBanner = () => {
  return (
    <div className="container m-auto h-[80%] bg-gradient-to-b from-[#fde1ff] flex justify-around mb-16">
      <div className=" flex flex-col justify-center gap-5 ">
        <h2 className="text-6xl font-bold">Exclusive</h2>
        <h2 className="text-6xl font-bold">Offers For You</h2>
        <p className="font-bold"> ONLY ON BEST SELLERS PRODUCTS</p>

        <button className="w-60  py-3 px-3 bg-red-500 text-white rounded-full cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="">
        <img src={exclusiveImage} alt="" className="h-[25rem]" />
      </div>
    </div>
  );
};

export default OfferBanner;
