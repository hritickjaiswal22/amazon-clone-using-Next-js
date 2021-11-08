import React, { Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseQuantity, removeFromCart } from "../slices/cartSlice";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import styles from "../styles/Cart.module.scss";

function Cart() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authState.userId);

  let totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const clickHandler = (event) => {
    if (event.target.nodeName === "BUTTON") {
      if (event.target.innerText === "Remove from Cart") {
        dispatch(removeFromCart([event.target.parentElement.parentElement.id]));
      }
      if (event.target.innerText === "Add to Cart") {
        dispatch(
          increaseQuantity([event.target.parentElement.parentElement.id])
        );
      }
    }
  };
  return (
    <Fragment>
      <Header />
      <main onClick={clickHandler} className={styles.main}>
        <article className={styles.cart}>
          <h1>Shopping Cart</h1>
          {cartItems.lenght <= 0
            ? ""
            : cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
        </article>
        <article
          className={
            user ? styles.priceBox : `${styles.priceBox} ${styles.disabled}`
          }
        >
          <h1>{`Total Price $${Math.round(totalPrice * 100) / 100}`}</h1>
          <Button children="Place Order" />
        </article>
      </main>
    </Fragment>
  );
}

export default Cart;
