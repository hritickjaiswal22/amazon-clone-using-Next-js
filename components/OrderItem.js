import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

import styles from "./OrderItem.module.scss";

function OrderItem({ product }) {
  const date = new Date(product.date);
  console.log(date);
  return (
    <div className={styles.orderItem}>
      <div className={styles.orderItem__infoBox}>
        <div className={styles.orderItem__imageBox}>
          <Image
            className={styles.orderItem__image}
            src={product.image}
            alt="Item Image"
            layout="fill"
          />
        </div>
        <div className={styles.orderItem__descriptionBox}>
          <h1 className={styles.orderItem__title}>{product.title}</h1>
          <div className={styles.ratingBox}>
            {Array(Math.floor(product.rating.rate))
              .fill()
              .map((param1, index) => (
                <StarIcon key={index} className={styles.starIcon} />
              ))}
          </div>
          <p className={styles.orderItem__description}>{product.description}</p>
          <p className={styles.orderItem__price}>Price is ${product.price}</p>
          <p className={styles.orderItem__price}>Quantity {product.quantity}</p>
          {product.date ? (
            <p className={styles.orderItem__price}>
              {"Ordered on: " +
                date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear() +
                " " +
                date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds()}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
