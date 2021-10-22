import React from "react";
import Form from "../components/Form";
import Button from "../components/Button";

import styles from "../styles/SignIn.module.scss";

function SignIn() {
  return (
    <main className={styles.main}>
      <Form />
      <h6 className={styles.h6}>New to Amazon?</h6>
      <Button>Create your Amazon Account</Button>
    </main>
  );
}

export default SignIn;
