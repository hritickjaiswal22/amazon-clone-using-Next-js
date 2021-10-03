import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

import styles from "./Product.module.scss";
import Button from "./Button";

function Product({ product }) {
  return (
    <div key={product.key} className={styles.card}>
      <div className={styles.card__imageBox}>
        <Image
          className={styles.card__image}
          src={product.image}
          alt="Product Image"
          layout="fill"
        />
      </div>
      <h1 className={styles.card__title}>{product.title}</h1>
      <div className={styles.ratingBox}>
        {Array(Math.floor(product.rating.rate))
          .fill()
          .map(() => (
            <StarIcon className={styles.starIcon} />
          ))}
      </div>
      <p className={styles.card__description}>{product.description}</p>
      <p className={styles.card__price}>{`$ ${product.price}`}</p>
      <Button />
    </div>
  );
}

export default Product;
