import React from "react";

import styles from "./Button.module.scss";

function Button({ children, clickHandler }) {
  return (
    <button onClick={clickHandler} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
