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
    removeFromCart(currentState, action) {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; //* Action Creators

export default cartSlice.reducer;
