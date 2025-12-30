"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Search from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import Nav from "./Nav";
import FilterSidebar from "./FilterSidebar";

const Header = () => {
  // Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="headerWrapper">
        <header className="w-full bg-black py-1 border-b border-black">
          <div className="w-full flex items-center justify-between px-4 py-2">

            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.jpeg"
                width={160}
                height={60}
                alt="logo"
              />
            </Link>

            {/* Search Bar */}
            <Search />

            {/* Right Menu */}
            <div className="flex items-center gap-5 text-white">

              {/* Login | Register */}
              <div className="flex items-center gap-3">
                <Link href="/login" className="hover:text-primary">Login</Link>
                <span>|</span>
                <Link href="/register" className="hover:text-primary">Register</Link>
              </div>

              {/* Wishlist Icon */}
              <Link href="/wishlist" className="flex">
                <FaRegHeart
                  size={25}
                  className="text-gray-400 hover:text-primary"
                />
              </Link>

              {/* Filter Icon → Opens Sidebar */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-primary"
              >
                <FiFilter size={26} />
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar Component */}
        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <Nav />
      </div>
    </>
  );
};

export default Header;
