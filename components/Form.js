import React, { useState } from "react";

import styles from "./Form.module.scss";
import Button from "../components/Button";

function Form({ formHeading }) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `Email is ${email} password is ${password} and username is ${userName}`
    );
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1 className={styles.form__heading}>{formHeading}</h1>
      <label className={styles.form__label}>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className={styles.form__input}
      />
      <label className={styles.form__label}>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className={styles.form__input}
      />
      <label className={styles.form__label}>Username</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="input"
        className={styles.form__input}
      />
      <Button>{formHeading}</Button>
    </form>
  );
}

export default Form;
