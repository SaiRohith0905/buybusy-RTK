import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, setCartItems } from "../Slices/cartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Access cart from Redux

  const handleAddItem = (product) => {
    const itemPresentIndex = cartItems.findIndex((ei) => ei.id === product.id);

    if (itemPresentIndex < 0) {
      // New product, add it to the cart with quantity 1
      dispatch(addProductToCart({ ...product, quantity: 1 }));
    } else {
      // Product already exists, update the quantity
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      dispatch(setCartItems(updatedCart)); // Update the cart
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.image} alt="Product" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.price}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => handleAddItem(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
