import React from "react";

import styles from "./Button.module.scss";

function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
