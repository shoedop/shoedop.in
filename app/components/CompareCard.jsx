"use client";

import { useState } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { FaArrowRight } from "react-icons/fa";

const CompareCard = ({ img, name, prices, rating }) => {
  const [open, setOpen] = useState(false);

  const lowest = Math.min(...prices.map((p) => p.price));
  const highest = Math.max(...prices.map((p) => p.price));
  const discount = Math.round(((highest - lowest) / highest) * 100);

  const platformImages = {
    Amazon: "/platforms/amazon.PNG",
    Myntra: "/platforms/myntra.PNG",
    Flipkart: "/platforms/flipkart.PNG",
    Ajio: "/platforms/ajio.PNG",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer relative">

      {/* IMAGE */}
      <Image
        src={img}
        width={300}
        height={250}
        alt={name}
        className="rounded-md object-cover h-62.5 w-full"
      />

      {/* BEST PRICE BADGE */}
      <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow">
        BEST PRICE
      </span>

      {/* DISCOUNT BADGE */}
      <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow">
        {discount}% OFF
      </span>

      {/* TITLE */}
      <h3 className="font-semibold mt-3 text-[16px] h-45px">
        {name}
      </h3>

      {/* RATING */}
      <Rating name="read-only" value={rating} precision={0.5} readOnly size="small" />

      {/* PRICE LIST – ALWAYS SHOW LOWEST PLATFORM */}
      <div
        className={`mt-3 border p-3 rounded-lg flex justify-between items-center ${
          prices.find((p) => p.price === lowest) ? "border-green-500 bg-green-50" : "border-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image
            src={platformImages[prices.find((p) => p.price === lowest).platform]}
            width={22}
            height={22}
            alt="best platform"
          />
          <span className="text-gray-800 text-sm">
            {prices.find((p) => p.price === lowest).platform}
          </span>
        </div>

        <span className="text-green-700 font-semibold">
          ₹{lowest}
        </span>
      </div>
{/* SLIDE DOWN SECTION */}
<div
  className={`transition-all duration-300 overflow-hidden ${
    open ? "max-h-60 mt-3" : "max-h-0"
  }`}
>
  <div className="flex flex-col gap-2">

    {/* Show all except lowest */}
    {prices
      .filter((p) => p.price !== lowest)
      .map((p, i) => (
        <div
          key={i}
          className="flex justify-between items-center border p-2 rounded-lg border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Image
              src={platformImages[p.platform]}
              width={20}
              height={20}
              alt={p.platform}
            />
            <span>{p.platform}</span>
          </div>

          <span className="text-gray-700">₹{p.price}</span>
        </div>
      ))}
  </div>
</div>


      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        {open ? "Hide Options" : "Compare other deals"} <FaArrowRight size={14} />
      </button>
    </div>
  );
};

export default CompareCard;
