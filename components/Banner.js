import React from "react";
import Image from "next/image";

import styles from "./Banner.module.scss";

function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        layout="responsive"
        width="300"
        height="125"
      />
    </section>
  );
}

export default Banner;
