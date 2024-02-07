import React, { useEffect } from "react";
import HeroComponent from "../components/HeroComponent";
import PopularItems from "../components/PopularItems";
import OfferBanner from "../components/OfferBanner";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";


const Shop = () => {
  
  return (
    <div className="max-w-[1920]">
      <HeroComponent />
      <PopularItems />
      <OfferBanner />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
