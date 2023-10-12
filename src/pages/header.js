import Link from "next/link";
import React from "react";




const header = () => {
  return (
    <div className="flex bg-gradient-to-r from-blue-950 to-blue-600 h-16 lg:w-auto md:w-auto w-max justify-between items-center lg:px-16 md:px-16 px-4 space-x-4">
      <div className="lg:text-2xl md:text-lg text-sm flex flex-col lg:flex lg:flex-row md:flex-row md:flex ">Welcome to<diiv className='lg:ml-2 md:ml-2  text-orange-500 '> Lingeshwara Tiles</diiv></div>
      <div >
        <ul className="flex lg:space-x-10 md:space-x-10 space-x-4">
        <Link href="/" className="hover:text-gray-400 sm:text-sm"> <li>Home</li></Link>
        <Link href="/categories" className="hover:text-gray-400 sm:text-sm"> <li>Categories</li></Link>
        <Link href="/about" className="hover:text-gray-400 sm:text-sm"> <li>About</li></Link>
          <Link href="/contact" className="hover:text-gray-400 sm:text-sm"><li>Contact Us</li></Link>
          
        </ul>
      </div>
    </div>
  );
};

export default header;
