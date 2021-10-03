import Head from "next/head";
import { Fragment } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Amazon Clone using Next js</title>
        <meta name="description" content="Amazon clone using Next js" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
