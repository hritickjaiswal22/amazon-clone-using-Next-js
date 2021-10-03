import Product from "./Product";
import styles from "./ProductList.module.scss";

function ProductList({ products }) {
  return (
    <main className={styles.productList}>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </main>
  );
}

export default ProductList;
