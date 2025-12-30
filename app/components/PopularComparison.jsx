import CompareCard from "./CompareCard";

const PopularComparison = () => {
  const products = [
    {
      img: "/shoe1.png",
      name: "Campus Running Sneakers",
      rating: 4.5,
      prices: [
        { platform: "Amazon", price: 1299 },
        { platform: "Myntra", price: 1399 },
        { platform: "Ajio", price: 1340 },
        { platform: "Flipkart", price: 1220 },
      ],
    },
    {
      img: "/shoe2.png",
      name: "Nike Casual Sneakers",
      rating: 4.6,
      prices: [
        { platform: "Amazon", price: 4999 },
        { platform: "Myntra", price: 5299 },
        { platform: "Ajio", price: 5150 },
        { platform: "Flipkart", price: 4899 },
      ],
    },
    {
      img: "/shoe3.png",
      name: "Adidas Streetwear Shoe",
      rating: 4.7,
      prices: [
        { platform: "Amazon", price: 3499 },
        { platform: "Myntra", price: 3699 },
        { platform: "Ajio", price: 3590 },
        { platform: "Flipkart", price: 3400 },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Popular Price Comparison</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <CompareCard
            key={i}
            img={p.img}
            name={p.name}
            prices={p.prices}
            rating={p.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularComparison;
