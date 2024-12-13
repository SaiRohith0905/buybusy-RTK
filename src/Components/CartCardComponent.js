import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart, updateCartItem } from "../Slices/cartSlice";

const CartCardComponent = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const handleRemove = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      dispatch(updateCartItem({ ...product, quantity: updatedQuantity }));
    } else {
      handleRemove(); // Remove item if quantity reaches 1
    }
  };

  const handleIncrease = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    dispatch(updateCartItem({ ...product, quantity: updatedQuantity }));
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.image} alt="Product" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <p>₹{product.price}</p>
        <div>
          <button
            onClick={handleDecrease}
            className="border border-solid border-black m-4 p-2 rounded-full text-2xl bg-black text-white"
          >
            -
          </button>
          <p className="inline-block">{quantity || 0}</p>{" "}
          {/* Ensure quantity is valid */}
          <button
            onClick={handleIncrease}
            className="border border-solid border-black m-4 p-2 rounded-full text-2xl bg-black text-white"
          >
            +
          </button>
        </div>
        <div className="card-actions">
          <button onClick={handleRemove} className="btn btn-primary">
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCardComponent;
