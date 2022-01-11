import React, { useState, Fragment, useRef } from "react";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import styles from "./Form.module.scss";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { saveUser, saveUserName } from "../slices/authSlice";

function Form({ formHeading, takeUserName, forgotPassword }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const errorBoxRef = useRef();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUp = () => {
    if (email.length === 0 || password.length === 0 || userName.length === 0) {
      errorBoxRef.current.classList.add(styles.visible);
      setIsLoading(false);
      return (errorBoxRef.current.innerText = "All fields are Required");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        });
        dispatch(saveUserName(userName));
        dispatch(saveUser(user.uid));
        setIsLoading(false);
        router.push("/");
      })
      .catch((e) => {
        errorBoxRef.current.classList.add(styles.visible);
        errorBoxRef.current.innerText = e;
        setIsLoading(false);
      });
  };

  const signIn = () => {
    if (email.length === 0 || password.length === 0) {
      errorBoxRef.current.classList.add(styles.visible);
      setIsLoading(false);
      return (errorBoxRef.current.innerText = "All fields are Required");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(saveUserName(user.displayName));
        dispatch(saveUser(user.uid));
        setIsLoading(false);
        router.push("/");
      })
      .catch((e) => {
        errorBoxRef.current.classList.add(styles.visible);
        errorBoxRef.current.innerText = e;
        setIsLoading(false);
      });
  };

  const resetPassword = () => {
    if (email.length === 0) {
      errorBoxRef.current.classList.add(styles.visible);
      setIsLoading(false);
      return (errorBoxRef.current.innerText = "All fields are Required");
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
      })
      .catch((e) => {
        errorBoxRef.current.classList.add(styles.visible);
        errorBoxRef.current.innerText = e;
        setIsLoading(false);
      });
  };

  const submitHandler = (e) => {
    errorBoxRef.current.classList.remove(styles.visible);
    setIsLoading(true);
    e.preventDefault();
    if (takeUserName) {
      signUp();
    } else if (forgotPassword) {
      resetPassword();
    } else {
      signIn();
    }
  };

  return (
    <Fragment>
      <div ref={errorBoxRef} className={styles.errorBox}></div>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1 className={styles.form__heading}>{formHeading}</h1>
        <label className={styles.form__label}>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className={styles.form__input}
        />
        {forgotPassword ? (
          ""
        ) : (
          <Fragment>
            <label className={styles.form__label}>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={styles.form__input}
            />
          </Fragment>
        )}
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
        <Button>{isLoading ? <Loader /> : formHeading}</Button>
      </form>
    </Fragment>
  );
}

export default Form;
