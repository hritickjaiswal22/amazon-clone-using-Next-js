import React from "react";
import { useRouter } from "next/router";

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
      <Form formHeading="Sign-In" takeUserName={false} />
      <h6 className={styles.h6}>New to Amazon?</h6>
      <Button clickHandler={clickHandler}>Create your Amazon Account</Button>
    </main>
  );
}

export default SignIn;
