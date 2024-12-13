import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks for asynchronous logic
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (product) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(product), 500)
    );
    return response;
  }
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (productId) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(productId), 500)
    );
    return response;
  }
);

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (product) => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(product), 500)
    );
    return response;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    status: "idle",
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductToCart.fulfilled, (state, action) => {
        // Check if the product is already in the cart
        const existingProductIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );

        if (existingProductIndex >= 0) {
          // Update quantity if the product is already in the cart
          state.cartItems[existingProductIndex].quantity += 1;
        } else {
          // Otherwise, add the product with quantity 1
          state.cartItems.push(action.payload);
        }
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.cartItems.findIndex(
          (item) => item.id === updatedProduct.id
        );
        if (index >= 0) {
          state.cartItems[index] = updatedProduct;
        }
      });
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
