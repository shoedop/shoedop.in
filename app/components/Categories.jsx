import { GiRunningShoe } from "react-icons/gi";
import { FaShoePrints, FaSocks } from "react-icons/fa";
import { MdSportsSoccer } from "react-icons/md";
import { PiSneakerMoveDuotone } from "react-icons/pi";

const Categories = () => {
  const items = [
    { name: "Sneakers", icon: <GiRunningShoe size={28} className='hover:text-primary' /> },
    { name: "Running", icon: <MdSportsSoccer size={28} className='hover:text-primary'/> },
    { name: "Casual", icon: <FaShoePrints size={28} className='hover:text-primary' /> },
    { name: "Streetwear", icon: <PiSneakerMoveDuotone size={28} className='hover:text-primary' /> },
    { name: "Sports", icon: <MdSportsSoccer size={28}  className='hover:text-primary'/> },
    { name: "Formals", icon: <FaSocks size={28}  className='hover:text-primary'/> },
    { name: "Vintage", icon: <GiRunningShoe size={28}  className='hover:text-primary'/> },
    { name: "Trending", icon: <FaShoePrints size={28}  className='hover:text-primary'/> },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 text-center">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full">
              {item.icon}
            </div>
            <p className="mt-2 text-sm font-medium">{item.name}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Categories;
