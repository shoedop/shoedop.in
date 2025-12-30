import ProductPage from "../components/ProductPage";
import { streetProducts } from "../data/products";

export default function street() {
  return (
    <ProductPage title="street Shoes" products={streetProducts} />
  );
}