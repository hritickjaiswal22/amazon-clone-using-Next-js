import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";

import store from "../store/index";
import { firebaseConfig } from "../configs/firebaseConfig";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  return (
    <Fragment>
      <Head>
        <title>Amazon Clone using Next js</title>
        <meta name="description" content="Amazon clone using Next js" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
