import React from "react";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";

const HeroComponent = () => {
  return (
    <div className="  h-[80%] bg-gradient-to-b from-[#fde1ff] ">
      <div className="container mx-auto flex justify-around ">

    
      <div className=" flex flex-col justify-center gap-5 ">
        <h2 className="font-bold">NEW ARRIVALS ONLY</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <p className="md:text-4xl lg:text-6xl font-bold">new</p>
            <img className="h-8 md:h-10 lg:h-16" src={handIcon} alt="" />
          </div>
          <p className="md:text-4xl lg:text-6xl font-bold">collections</p>
          <p className="md:text-4xl lg:text-6xl font-bold">for everyone</p>
        </div>
        <div className="w-60 bg-red-500 flex justify-center items-center gap-5 py-3 px-3 text-white rounded-full cursor-pointer">
          <div className="text-xl">Latest Collection</div>
          <img className="w-10 h-5" src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hidden md:block">
        <img className="md:h-[25rem] lg:h-[35rem]" src={heroImage} alt="" />
      </div>
    </div>
    </div>
  );
};

export default HeroComponent;
