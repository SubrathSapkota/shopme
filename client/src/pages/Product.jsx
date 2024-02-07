import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrun from "../components/Breadcrun";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const product = useSelector((state) => state.shop.singleProduct);
  
  return (
    <div className="container m-auto px-4 my-10">
      <Breadcrun category={product.category} productName={product.name}/>
      <ProductDisplay product={product}/>
      <ProductDescription/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
