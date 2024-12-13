import { createContext } from "react";
const orderContext = createContext({
  orders: [],
  setOrders: () => {},
});

export default orderContext;
