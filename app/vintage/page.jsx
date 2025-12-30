import ProductPage from "../components/ProductPage";
import { vintageProducts } from "../data/products";

export default function vintage() {
  return (
    <ProductPage title="vintage Shoes" products={vintageProducts} />
  );
}