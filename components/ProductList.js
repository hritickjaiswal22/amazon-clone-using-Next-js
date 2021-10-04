import Product from "./Product";
import styles from "./ProductList.module.scss";

function ProductList({ products }) {
  return (
    <main className={styles.productList}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
