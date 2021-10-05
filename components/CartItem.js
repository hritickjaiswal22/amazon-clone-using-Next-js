import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

import styles from "./CartItem.module.scss";
import Button from "../components/Button";

function CartItem({ product }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__infoBox}>
        <div className={styles.cartItem__imageBox}>
          <Image
            className={styles.cartItem__image}
            src={product.image}
            alt="Item Image"
            layout="fill"
          />
        </div>
        <div className={styles.cartItem__descriptionBox}>
          <h1 className={styles.cartItem__title}>{product.title}</h1>
          <div className={styles.ratingBox}>
            {Array(Math.floor(product.rating.rate))
              .fill()
              .map(() => (
                <StarIcon className={styles.starIcon} />
              ))}
          </div>
          <p className={styles.cartItem__description}>{product.description}</p>
          <p className={styles.cartItem__price}>Price is ${product.price}</p>
          <p className={styles.cartItem__price}>Quantity {product.quantity}</p>
        </div>
      </div>
      <div className={styles.cartItem__buttonBox}>
        <Button children="Remove from Cart" />
      </div>
    </div>
  );
}

export default CartItem;
