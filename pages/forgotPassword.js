import React from "react";
import Link from "next/link";

import Form from "../components/Form";

import styles from "../styles/ForgotPassword.module.scss";

function ForgotPassword() {
  return (
    <main className={styles.main}>
      <Form
        formHeading="Forgot Password"
        takeUserName={false}
        forgotPassword={true}
      />

      <Link href="/signin">
        <a className={styles.link} href="">
          Back to SignIn
        </a>
      </Link>
    </main>
  );
}

export default ForgotPassword;
