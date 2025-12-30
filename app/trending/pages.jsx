import ProductPage from "../components/ProductPage";
import { trendingProducts } from "../data/products";

export default function trending() {
  return (
    <ProductPage title="trending Shoes" products={trendingProducts} />
  );
}