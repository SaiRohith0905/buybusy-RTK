import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
