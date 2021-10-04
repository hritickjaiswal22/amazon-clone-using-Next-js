import React, { Fragment } from "react";

import Header from "../components/Header";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import styles from "../styles/Cart.module.scss";

function Cart() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <article className={styles.cart}>
          <h1>Shopping Cart</h1>
          <CartItem />
        </article>
        <article className={styles.priceBox}>
          <h1>Total Price $100</h1>
          <Button children="Place Order" />
        </article>
      </main>
    </Fragment>
  );
}

export default Cart;
