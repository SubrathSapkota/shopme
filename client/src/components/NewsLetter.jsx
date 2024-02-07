import React from "react";

const NewsLetter = () => {
  return (
    <div className="container m-auto py-10 bg-gradient-to-b from-[#fde1ff] flex justify-center items-center mb-16">
      <div className=" flex flex-col items-center justify-center gap-10 ">
        <h2 className="text-4xl lg:text-6xl font-medium text-center">
          Get Exclusive Offers On Your Email
        </h2>
        <p>Subscribe to our newsletter and stay updated</p>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          <input className="w-96 px-3 py-3 border-2 rounded-full  focus:outline-none" type="text" placeholder="Your Email id"/>
          <button className="w-40  py-3 px-3 bg-red-500 text-white rounded-full  cursor-pointer ">
            Check Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
