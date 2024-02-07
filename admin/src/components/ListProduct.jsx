import React, { useEffect, useState } from "react";
import deleteImage from "../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProductData = async () => {
    await fetch("http://localhost:5000/product/getallproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const deleteHandler = async (id) => {
    await fetch("http://localhost:5000/product/deleteproducts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchProductData();
  };

  return (
    <div className=" w-full mx-5 mt-[90px] my-5 bg-white py-5 px-5 flex flex-col gap-5 text-2xl border-separate border-spacing-2 border border-slate-500">
      <div className="flex flex-col px-5 overflow-x-hidden overflow-scroll relative">
        <div className="flex flex-col items-center gap-2 sticky top-0 bg-white">
          <h1 className="text-4xl font-bold">All Product List</h1>
          <hr className="border-2 border-black w-32 rounded-full" />
        </div>
        <table className="table-fixed border-b-2 ">
          <thead className="h-20 sticky top-12 bg-white">
            <tr className=" text-left   ">
              <th>ID</th>
              <th>Image</th>
              <th className="max-w-[200px]">Product</th>
              <th>Category</th>
              <th>New Price</th>
              <th>Old Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item, index) => {
              const { id, image, username, category, old_price, new_price } =
                item;
              return (
                <tr key={index} className="h-32 border-b-2">
                  <td>{id}</td>
                  <td>
                    <img className="h-20" src={image} alt="image" />
                  </td>
                  <td className="max-w-[200px] pr-5 ">{username}</td>
                  <td>{category}</td>
                  <td>$ {old_price}</td>
                  <td>$ {new_price}</td>
                  <td>
                    <img
                      className="cursor-pointer "
                      src={deleteImage}
                      alt=""
                      onClick={() => deleteHandler(id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
