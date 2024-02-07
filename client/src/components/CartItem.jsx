import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../Assets/cart_cross_icon.png";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  totalPrice,
} from "../context/CartContext";

const CartItem = () => {
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(totalPrice());
  });

  return (
    <>
      {cartProduct.map((item, index) => {
        const { id, name, image, category, new_price, old_price, quantity } =
          item;
        return (
          <div key={index}>
            <div className="grid grid-cols-6 items-center justify-center ">
              <img className="w-16" src={image} alt="" />
              <h1 className="col-span-2">{name}</h1>

              <p className="justify-self-center">${new_price * quantity}</p>
              <div className="flex items-center justify-center gap-2 ">
                <button
                  className="px-2  border text-xl font-bold rounded-full"
                  disabled={quantity === 6}
                  onClick={(e) => {
                    return (
                      e.preventDefault(),
                      dispatch(increaseQuantity(id)),
                      dispatch(totalPrice())
                    );
                  }}
                >
                  +
                </button>
                <span>{quantity}</span>
                <button
                  className="px-2  border text-xl font-bold rounded-full"
                  disabled={quantity === 1}
                  onClick={(e) => {
                    return (
                      e.preventDefault(),
                      dispatch(decreaseQuantity(id)),
                      dispatch(totalPrice())
                    );
                  }}
                >
                  -
                </button>
              </div>
              <button
                className="justify-self-center"
                onClick={(e) => {
                  return e.preventDefault(), dispatch(deleteItem(id));
                }}
              >
                <img src={deleteIcon} alt="" />
              </button>
            </div>
            <hr className="mt-5 border-[1px]" />
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
