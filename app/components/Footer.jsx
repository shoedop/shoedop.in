import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ShoeDop</h2>
          <p className="text-gray-400 text-sm">
            Your trusted sneaker marketplace for every style — street, sports, vintage & more.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-3 hover:text-primary">Shop</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link href="/" className='hover:text-primary'>Sports Shoes</Link>
            <Link href="/" className='hover:text-primary'>Sneakers</Link>
            <Link href="/" className='hover:text-primary'>Casual</Link>
            <Link href="/" className='hover:text-primary'>Streetwear</Link>
            <Link href="/" className='hover:text-primary'>Formals</Link>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link href="/" className='hover:text-primary'>Customer Support</Link>
            <Link href="/" className='hover:text-primary'>Order Tracking</Link>
            <Link href="/" className='hover:text-primary'>Returns</Link>
            <Link href="/" className='hover:text-primary'>Terms & Conditions</Link>
            <Link href="/" className='hover:text-primary'>Privacy Policy</Link>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
            <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
          </div>


          <form className="flex flex-col gap-1 w-70 mt-5">
           <div className="w-full bg-red-500 py-2 flex flex-col items-center">
  
  {/* Input box */}
  <input
    type="email"
    placeholder="Your email address"
    className="
      w-[90%] 
      max-w-80 
      py-2 
      px-2 
      rounded-lg 
      bg-white 
      text-black 
      outline-none 
      shadow-md
      placeholder-gray-400
    "
  />

  {/* Subscribe button */}
  <button
    className="
      mt-4 
      text-white 
      font-semibold 
      tracking-wide
      hover:underline
      transition
      border-gray
    "
  >
    SUBSCRIBE
  </button>
</div>

          </form>
        </div>

      </div>

      {/* bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ShoeDop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
