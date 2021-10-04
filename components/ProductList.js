import Product from "./Product";
import styles from "./ProductList.module.scss";

function ProductList({ products, addToCartClickHandler }) {
  return (
    <main onClick={addToCartClickHandler} className={styles.productList}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
