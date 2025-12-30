import ProductPage from "../components/ProductPage";
import { womenProducts } from "../data/products";

export default function Women() {
  return (
    <ProductPage title="Women's Shoes" products={womenProducts} />
  );
}