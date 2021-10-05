import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import styles from "../styles/Cart.module.scss";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  let totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <article className={styles.cart}>
          <h1>Shopping Cart</h1>
          {cartItems.lenght <= 0
            ? ""
            : cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
        </article>
        <article className={styles.priceBox}>
          <h1>{`Total Price $${totalPrice}`}</h1>
          <Button children="Place Order" />
        </article>
      </main>
    </Fragment>
  );
}

export default Cart;
