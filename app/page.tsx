import HomeSlider from "./components/HomeSlider";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import PopularComparison from "./components/PopularComparison";
import MiniBannerSlider from "./components/MiniBannerSlider";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <Categories />
      <PopularComparison />
      <MiniBannerSlider />
      <Footer />
    </div>
  );
}
