import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import { addToCart } from "../slices/cartSlice";

export default function Home({ products }) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authState);
  console.log(authState);

  const addToCartClickHandler = (event) => {
    if (event.target.nodeName === "BUTTON") {
      const productNo = event.target.parentElement.id;
      dispatch(addToCart(products[productNo - 1]));
    }
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
