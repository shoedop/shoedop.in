import ProductPage from "../components/ProductPage";
import { formalProducts } from "../data/products";

export default function formal() {
  return (
    <ProductPage title="formal Shoes" products={formalProducts} />
  );
}