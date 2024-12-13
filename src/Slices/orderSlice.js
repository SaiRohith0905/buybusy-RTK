import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    addOrder(state, action) {
      // Avoid direct mutation of the state (using push)
      console.log(action, state, "sai");
      console.log([...state.orders, action.payload], "rohith");
      state.orders = [...state.orders, action.payload];
    },
  },
});

export const { setOrders, addOrder } = orderSlice.actions;
export default orderSlice.reducer;
