import { allProducts } from "@/app/data/products";

export default function ProductDetail({ params }) {
  const { id } = params;

  const product = allProducts.find((p) => p.id == id);

  if (!product) {
    return <div className="p-10 text-xl">❌ Product Not Found</div>;
  }

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <Image
          src={product.img}
          width={600}
          height={600}
          alt={product.name}
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500">{product.brand}</p>
        <p className="text-xl font-semibold">₹{product.price}</p>

        <p className="text-gray-700">{product.description}</p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
