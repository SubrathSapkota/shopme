import React from "react";
import product from "../data/data";
import Item from "./Item";

const RelatedProducts = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center gap-4 mb-16 ">
      <h1 className="text-5xl font-medium">Related Products</h1>
      <hr className="w-32 border-2 border-black"/>
      <div className="grid grid-cols-4  gap-2 mt-4 px-5 py-5 bg-slate-100  ">
        {product.map((item, index) => {
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
    </div>
  );
};

export default RelatedProducts;
