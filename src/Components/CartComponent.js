import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../Slices/orderSlice";

import CartCardComponent from "./CartCardComponent";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className="flex gap-4 flex-wrap">
      {cartItems.length === 0 ? (
        <div>Your Cart is Empty.. Please add some items</div>
      ) : (
        <>
          <aside className="bg-blue-200 h-fit rounded-xl p-4">
            <div className="font-bold">Total Amount: ₹{totalPrice}</div>
            <button
              onClick={() => {
                const newOrder = {
                  orderId: new Date().toLocaleString(),
                  orderItems: cartItems,
                  totalPrice,
                };
                console.log(newOrder);
                dispatch(addOrder(newOrder));
                navigate("/myorders");
              }}
              className="border border-solid border-black m-4 p-2 rounded-full text-xl bg-black text-white"
            >
              Purchase
            </button>
          </aside>
          {cartItems.map((ci) => (
            <CartCardComponent key={ci.id} product={ci} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartComponent;
