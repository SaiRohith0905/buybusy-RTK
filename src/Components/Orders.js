import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../Slices/orderSlice";
import OrderSummary from "./OrderSummary";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Your Orders</h1>

      <div>
        {orders.length === 0 ? (
          <div>You have no orders to display</div>
        ) : (
          orders.map((order) => (
            <OrderSummary key={order.orderId} orderDetails={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
