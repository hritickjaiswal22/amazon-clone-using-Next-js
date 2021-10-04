import { Fragment } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  const addToCartClickHandler = (event) => {
    const productNo = event.target.parentElement.id;
    console.log(products[productNo - 1]);
  };

  return (
    <Fragment>
      <Header />
      <Banner />
      <ProductList
        addToCartClickHandler={addToCartClickHandler}
        products={products}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
