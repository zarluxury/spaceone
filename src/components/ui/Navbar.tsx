import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import Image from 'next/image';
import logo from '../../../public/data/logo.png';
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
<nav className="fixed top-0 w-full z-50">
  <div className="h-14 bg-gray-100 backdrop-blur-md grid grid-cols-3 items-center px-6 text-black">
    
    {/* Left: Navigation Links */}
    <div className="flex items-center">
      <ul className="flex items-center gap-6 font-[100] font-gramatika -tracking-tighter">
        <li className="cursor-pointer hover:opacity-70 transition-opacity">
          <RxHamburgerMenu className="text-2xl" />
        </li>
        <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Products</li>
        <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Projects</li>
        <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Metarioteca</li>
      </ul>
    </div>

    {/* Center: Logo */}
    <div className="flex justify-center items-center">
      <Image src={logo} alt="logo" width={80} height={40} className="object-contain" />
    </div>

    {/* Right: Actions */}
    <div className="flex justify-end items-center">
      <ul className="flex items-center gap-5">
        <li className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
          <CiSearch className="text-2xl" />
        </li>
        <li className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
          <CiUser className="text-2xl" />
        </li>
      </ul>
    </div>
    
  </div>
</nav>
  )
}

export default Navbar