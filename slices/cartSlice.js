import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(currentState, action) {
      let index = -1;
      for (let i = 0; i < currentState.cart.length; i++) {
        if (currentState.cart[i].id === action.payload.id) {
          index = i;
          break;
        }
      }
      if (index < 0) {
        const item = { quantity: 1, ...action.payload };
        currentState.cart.push(item);
      } else {
        currentState.cart[index].quantity++;
      }
    },
    removeFromCart(currentState, action) {
      const productId = +action.payload[0];
      const index = currentState.cart.findIndex(
        (product) => product.id === productId
      );
      if (currentState.cart[index].quantity > 1)
        currentState.cart[index].quantity--;
      else currentState.cart.splice(index, 1);
    },
    increaseQuantity(currentState, action) {
      const productId = +action.payload[0];
      const index = currentState.cart.findIndex(
        (product) => product.id === productId
      );
      currentState.cart[index].quantity++;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions; //* Action Creators

export default cartSlice.reducer;
