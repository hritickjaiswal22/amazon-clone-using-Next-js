import Product from "./Product";

function ProductList({ products }) {
  return (
    <main>
      <Product product={products[0]} />
    </main>
  );
}

export default ProductList;
