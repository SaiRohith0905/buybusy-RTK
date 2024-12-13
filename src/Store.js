// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import orderReducer from "./Slices/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;
