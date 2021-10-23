import React from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Form from "../components/Form";
import Button from "../components/Button";
import styles from "../styles/SignIn.module.scss";

function SignUp() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/signin");
  };

  return (
    <main className={styles.main}>
      <Form
        authHandler={createUserWithEmailAndPassword}
        formHeading="Sign-Up"
        takeUserName={false}
      />
      <h6 className={styles.h6}>Already a memeber?</h6>
      <Button clickHandler={clickHandler}>Sign In</Button>
    </main>
  );
}

export default SignUp;
