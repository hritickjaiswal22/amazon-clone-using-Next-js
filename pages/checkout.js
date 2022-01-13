import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Button from "../components/Button";

import styles from "../styles/Checkout.module.scss";

function checkout() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const router = useRouter();
  const [address, setAddress] = useState("");
  const errorBoxRef = useRef();

  let totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const clickHandler = () => {
    if (address.length === 0) {
      errorBoxRef.current.classList.add(styles.visible);
      return (errorBoxRef.current.innerText = "Address is Required");
    } else router.push("/");
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Almost done !</h1>
      <article className={styles.article}>
        <h1
          className={styles.heading}
        >{`The total price is $${totalPrice}`}</h1>
        <input
          placeholder="Delivery Address"
          type="text"
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button clickHandler={clickHandler}>Place Order</Button>
      </article>
      <div ref={errorBoxRef} className={styles.errorBox}></div>
    </main>
  );
}

export default checkout;
