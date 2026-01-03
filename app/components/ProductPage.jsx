"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage({ title, products }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="flex items-center gap-5">
          <button
            className="flex items-center gap-2 text-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FiFilter /> Filters
          </button>

          <div className="flex items-center gap-1 text-lg cursor-pointer">
            Sort By <FiChevronDown />
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-8">
        {/* LEFT Category Menu */}
        <div className="hidden md:block border-r pr-4">
          <h2 className="text-lg font-bold mb-4">Categories</h2>

          <ul className="space-y-3">
            <li>Lifestyle</li>
            <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Training & Gym</li>
            <li>Jordan</li>
            <li>Skateboarding</li>
            <li>Golf</li>
            <li>Tennis</li>
            <li>Athletics</li>
            <li>Walking</li>
          </ul>
        </div>

        {/* RIGHT Product Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <Link href={`/product/${item.id}`} key={idx} className="block shadow hover:shadow-xl rounded-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div >
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  className="rounded-t-lg w-full object-cover"
                  alt={item.name}
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">Just In</p>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-xl font-bold mt-1">₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SIDEBAR */}
      <FilterSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
