import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getDatabase,
  ref,
  set,
  push,
  serverTimestamp,
} from "firebase/database";

import Button from "../components/Button";
import Loader from "../components/Loader";

import styles from "../styles/Checkout.module.scss";

function checkout() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const user = useSelector((state) => state.authState);
  const router = useRouter();
  const [address, setAddress] = useState("");
  const errorBoxRef = useRef();
  const database = getDatabase();
  const [isLoading, setIsLoading] = useState(false);

  let totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.price,
    0
  );

  const clickHandler = () => {
    if (address.length === 0) {
      errorBoxRef.current.classList.add(styles.visible);
      return (errorBoxRef.current.innerText = "Address is Required");
    } else {
      setIsLoading(true);
      const path = `orders/${user.userId}`;
      const dbRef = ref(database, path);
      const newRef = push(dbRef);

      set(newRef, {
        user: user,
        orders: cartItems,
        timestamp: serverTimestamp(),
        deliveryAddess: address,
      }).then((res) => {
        setIsLoading(false);
        router.push("/");
      });
    }
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
        <Button clickHandler={clickHandler}>
          {isLoading ? <Loader /> : "Place Order"}
        </Button>
      </article>
      <div ref={errorBoxRef} className={styles.errorBox}></div>
    </main>
  );
}

export default checkout;
