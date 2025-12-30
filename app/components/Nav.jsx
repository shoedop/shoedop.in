import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-3 bg-white">
      <div className="w-full flex items-center justify-center gap-10 whitespace-nowrap">
        <Link href="/" className="text-[17px] text-gray-800 font[600] hover:text-primary">For-you</Link>
        <Link href="/men" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Men</span></Link>
        <Link href="/women" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Women</span></Link>
        <Link href="/formal" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Formal</span></Link>
        <Link href="/trending" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Trending</span></Link>
        <Link href="/vintage" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Vintage</span></Link>
        <Link href="/street" className="text-[17px] text-gray-800 font[600] hover:text-primary"><span>Street</span></Link>
      </div>
    </nav>
  );
};

export default Nav;
