import React from "react";
import Image from "next/image";

import styles from "./CartItem.module.scss";
import Button from "../components/Button";

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__infoBox}>
        <div className={styles.cartItem__imageBox}>
          <Image
            className={styles.cartItem__image}
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Item Image"
            layout="fill"
          />
        </div>
        <div className={styles.cartItem__descriptionBox}>
          <h1 className={styles.cartItem__title}>Hello</h1>
          <div className={styles.ratingBox}>
            {/* {Array(Math.floor(product.rating.rate))
              .fill()
              .map(() => (
                <StarIcon className={styles.starIcon} />
              ))} */}
          </div>
          <p className={styles.cartItem__description}>Hello</p>
          <p className={styles.cartItem__price}>Hello</p>
        </div>
      </div>
      <div className={styles.cartItem__buttonBox}>
        <Button children="Remove from Cart" />
      </div>
    </div>
  );
}

export default CartItem;
