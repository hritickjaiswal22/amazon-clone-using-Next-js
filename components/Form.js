import React, { useState, Fragment } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import styles from "./Form.module.scss";
import Button from "../components/Button";
import { saveUser, saveUserName } from "../slices/authSlice";

function Form({ formHeading, authHandler, takeUserName }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();

    authHandler(auth, email, password)
      .then((userCredential) => {
        console.log("Succesfully Done");

        if (takeUserName) {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(saveUser(user.refreshToken));
              dispatch(saveUserName(userName));
            } else {
              dispatch(saveUser(undefined));
              dispatch(saveUserName(undefined));
            }
          });
          router.push("/");
        } else {
          router.push("/signin");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
      {takeUserName ? (
        <Fragment>
          <label className={styles.form__label}>Username</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            className={styles.form__input}
          />
        </Fragment>
      ) : (
        ""
      )}

      <Button>{formHeading}</Button>
    </form>
  );
}

export default Form;
