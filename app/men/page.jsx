import Link from "next/link";
import Image from "next/image";
import { menProducts } from "@/app/data/products";

export default function MenPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {menProducts.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`} className="block">
          <div className="bg-white rounded-lg shadow hover:shadow-xl transition p-4 cursor-pointer">

            <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={400}
              className="rounded-md object-cover w-full"
            />

            <h3 className="font-semibold mt-3 text-lg">{item.name}</h3>
            <p className="text-gray-600">{item.brand}</p>
            <p className="font-bold text-gray-900 text-xl">₹{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
