import React from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";

import Form from "../components/Form";
import Button from "../components/Button";

import styles from "../styles/SignIn.module.scss";

function SignIn() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/signup");
  };

  return (
    <main className={styles.main}>
      <Form
        authHandler={signInWithEmailAndPassword}
        formHeading="Sign-In"
        takeUserName={true}
      />
      <h6 className={styles.h6}>New to Amazon?</h6>
      <Button clickHandler={clickHandler}>Create your Amazon Account</Button>
    </main>
  );
}

export default SignIn;
