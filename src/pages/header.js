"use client"
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from "react";

const Header = () => {

  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const handleCategoriesClick = () => {
    setCategoriesVisible(!categoriesVisible);
  }

  return (
    <div className="flex bg-gradient-to-r from-blue-950 to-blue-600 h-16 lg:w-auto md:w-auto w-auto justify-between items-center lg:px-16 md:px-12 px-4 space-x-4">
      <div className="lg:text-2xl md:text-lg text-sm flex flex-col lg:flex lg:flex-row md:flex-row md:flex">Welcome to <div className='lg:ml-2 md:ml-2 text-orange-500'>Lingeshwara Tiles</div></div>
      <div>
        <ul className="flex lg:space-x-10 md:space-x-6 space-x-2">
          <Link href="/" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px]"><li>Home</li></Link>
          <li className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px] cursor-pointer" onClick={handleCategoriesClick}>Categories</li>
          {categoriesVisible && (
            <ul className="absolute bg-gradient-to-b from-gray-600 to-gray-300 lg:w-52 md:w-36 lg:h-64 md:h-48 lg:p-6 md:p-3 p-2 md:text-md text-sm lg:text-lg lg:m-10 md:m-8 m-4 lg:leading-8 md:leading-6 text-blue-950  rounded-xl">
              <Link href="" className="hover:text-white"><li>Hall Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Kitchen Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Bedroom Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Elevation Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Pooja Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Bathroom Tiles</li></Link>
              <Link href="" className="hover:text-white"><li>Parking Tiles</li></Link>
            </ul>
          )}
          <Link href="/about" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px]"><li>About</li></Link>
          <Link href="/contact" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px]"><li>Contact Us</li></Link>
          <Link href="/cart" className="hover:text-gray-400">
            <AiOutlineShoppingCart size={16} className="lg:h-7 md:h-4 lg:w-10" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
