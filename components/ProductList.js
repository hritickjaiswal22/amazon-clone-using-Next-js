import Product from "./Product";
import styles from "./ProductList.module.scss";

function ProductList({ products }) {
  return (
    <main className={styles.productList}>
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
    </main>
  );
}

export default ProductList;
