import {
    menProducts,
    womenProducts,
    formalProducts,
    trendingProducts,
    vintageProducts,
    streetProducts
} from "../../data/products";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiHeart, FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// Combine all products into one array for lookup
const allProducts = [
    ...menProducts,
    ...womenProducts,
    ...formalProducts,
    ...trendingProducts,
    ...vintageProducts,
    ...streetProducts,
];

export default async function ProductDetails({ params }) {
    const { id } = await params;
    const product = allProducts.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl animate-fade-in bg-white rounded-xl shadow-xl mt-6">
            <Link href=".." className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-black transition-colors">
                <FiArrowLeft /> Back
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left: Product Image */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-8 group">
                    <div className="relative w-full aspect-square max-w-[500px]">
                        <Image
                            src={product.img}
                            alt={product.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            {product.brand} • {product.category}
                        </p>
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                            {product.name}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded text-green-800 font-bold text-sm">
                            <span>{product.rating}</span>
                            <FaStar size={12} />
                        </div>
                        <span className="text-gray-400 text-sm">120+ Reviews</span>
                    </div>

                    <div className="border-t border-b border-gray-100 py-4">
                        <p className="text-3xl font-bold text-gray-900">
                            ₹{product.price.toLocaleString()}
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                            Includes all taxes
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        {product.description}
                    </p>

                    {/* Color Selection (Visual Only for now) */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Color: {product.color}</h3>
                        <div className="flex gap-3">
                            <button className="w-8 h-8 rounded-full border-2 border-black ring-2 ring-offset-2 ring-gray-200" style={{ backgroundColor: product.color.toLowerCase() === 'white' ? '#fff' : product.color.toLowerCase() }}></button>
                        </div>
                    </div>

                    {/* Size Selection (Visual Only for now) */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-gray-900">Select Size (UK)</h3>
                            <button className="text-sm text-blue-600 hover:underline">Size Guide</button>
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                            {[6, 7, 8, 9, 10, 11].map((size) => (
                                <button key={size} className="border border-gray-200 rounded-md py-2.5 font-medium text-gray-700 hover:border-black hover:bg-gray-50 transition-all">
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button className="flex-1 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 duration-200">
                            <FiShoppingCart /> Add to Cart
                        </button>
                        <button className="px-6 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center text-gray-700">
                            <FiHeart size={24} />
                        </button>
                    </div>

                    {/* Delivery Info */}
                    <div className="mt-4 text-sm text-gray-500">
                        <ul className="list-disc list-inside space-y-1">
                            <li>Free delivery on orders over ₹2000</li>
                            <li>7 Days Return & Exchange</li>
                            <li>Cash on Delivery Available</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
