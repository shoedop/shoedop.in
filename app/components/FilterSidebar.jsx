"use client";

import { useState } from "react";
import {
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiRotateCcw,
} from "react-icons/fi";

// --------------------------------------------------------------
// REUSABLE DROPDOWN SECTION
// --------------------------------------------------------------
const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full font-semibold text-[17px]"
      >
        {title}
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 space-y-3">{children}</div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------
// MAIN SIDEBAR
// --------------------------------------------------------------
export default function FilterSidebar({
  isOpen,
  onClose,

  // Optional hooks to update product list
  onApplyFilters,
  onResetFilters,
}) {
  const [sortBy, setSortBy] = useState("Featured");

  // Store selected filters
  const [filters, setFilters] = useState({
    gender: [],
    kids: [],
    price: [],
    sports: [],
    fit: [],
    colors: [],
    clothing: [],
    tops: [],
    bottoms: [],
    shoeHeight: [],
    length: [],
    benefits: [],
    brand: [],
  });

  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const arr = prev[category];
      if (arr.includes(value)) {
        return { ...prev, [category]: arr.filter((v) => v !== value) };
      } else {
        return { ...prev, [category]: [...arr, value] };
      }
    });
  };

  const applyFilters = () => {
    if (onApplyFilters) onApplyFilters(filters, sortBy);
    onClose();
  };

  const resetFilters = () => {
    setFilters({
      gender: [],
      kids: [],
      price: [],
      sports: [],
      fit: [],
      colors: [],
      clothing: [],
      tops: [],
      bottoms: [],
      shoeHeight: [],
      length: [],
      benefits: [],
      brand: [],
    });
    setSortBy("Featured");

    if (onResetFilters) onResetFilters();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-85 h-full bg-gray-400 shadow-xl p-6 z-50 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <FiX size={28} />
        </button>

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiFilter /> Filters
        </h2>

        {/* --------------------------------------------------------------
        SORT BY DROPDOWN
        -------------------------------------------------------------- */}
        <Section title="Sort By">
          {["Featured", "Newest", "Price: High-Low", "Price: Low-High"].map(
            (type) => (
              <button
                key={type}
                onClick={() => setSortBy(type)}
                className={`block text-left w-full p-2 rounded ${
                  sortBy === type
                    ? "bg-black text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {type}
              </button>
            )
          )}
        </Section>

        {/* --------------------------------------------------------------
        FILTER SECTIONS (Gender, Kids, Price etc.)
        -------------------------------------------------------------- */}

        <Section title="Gender">
          {["Men", "Women", "Unisex"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.gender.includes(g)}
                onChange={() => toggleFilter("gender", g)}
              />
              {g}
            </label>
          ))}
        </Section>

        <Section title="Kids">
          {["Boys", "Girls"].map((k) => (
            <label key={k} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.kids.includes(k)}
                onChange={() => toggleFilter("kids", k)}
              />
              {k}
            </label>
          ))}
        </Section>

        <Section title="Shop By Price">
          {[
            "Under ₹ 2 500",
            "₹ 2 501 - ₹ 7 500",
            "₹ 7 501 - ₹ 12 999",
            "Over ₹ 13 000",
          ].map((p) => (
            <label key={p} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.price.includes(p)}
                onChange={() => toggleFilter("price", p)}
              />
              {p}
            </label>
          ))}
        </Section>

        <Section title="Fit">
          {["Loose", "Slim", "Standard"].map((f) => (
            <label key={f} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.fit.includes(f)}
                onChange={() => toggleFilter("fit", f)}
              />
              {f}
            </label>
          ))}
        </Section>

        <Section title="Colour">
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Black", color: "#000" },
              { name: "Blue", color: "#1E90FF" },
              { name: "Brown", color: "#8B4513" },
              { name: "Green", color: "#4CAF50" },
              { name: "Grey", color: "#777" },
              { name: "Orange", color: "#FF6600" },
              { name: "Pink", color: "#FF66CC" },
              { name: "Purple", color: "#7D2AE8" },
              { name: "Red", color: "#FF1A1A" },
              { name: "White", color: "#FFF", border: true },
              { name: "Yellow", color: "#FFD700" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => toggleFilter("colors", c.name)}
              >
                <div
                  className="w-8 h-8 rounded-full border"
                  style={{
                    background: c.color,
                    border: c.border ? "1px solid #000" : "none",
                  }}
                ></div>
                <span className="text-xs">{c.name}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Brand">
          {["Nike", "Adidas", "Puma", "Campus", "Skechers"].map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.brand.includes(b)}
                onChange={() => toggleFilter("brand", b)}
              />
              {b}
            </label>
          ))}
        </Section>

        {/* --------------------------------------------------------------
         APPLY / RESET BUTTONS
        -------------------------------------------------------------- */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={applyFilters}
            className="w-full py-3 bg-black text-white rounded-lg text-[17px] font-semibold hover:bg-gray-800 transition"
          >
            Apply Filters
          </button>

          <button
            onClick={resetFilters}
            className="w-full py-3 border border-black rounded-lg text-[16px] flex items-center justify-center gap-2"
          >
            <FiRotateCcw /> Reset All
          </button>
        </div>
      </div>
    </>
  );
}
