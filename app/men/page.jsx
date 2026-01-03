import ProductPage from "../components/ProductPage";
import { menProducts } from "../data/products";

export default function men() {
  return (
    <ProductPage title="men's Shoes" products={menProducts} />
  );
}