"use client"
import { useState } from 'react'
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { CiSearch } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import Image from 'next/image'
import logo from '../../../public/data/logo.png'
import { CiUser } from "react-icons/ci"
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="h-14 shadow-2xs bg-white backdrop-blur-md grid grid-cols-3 items-center px-6 text-black">
        
        {/* Left: Navigation Links & Hamburger */}
        <div className="flex items-center">
          <ul className="flex items-center gap-6 text-[15px] font-gramatika -tracking-tighter">
            <li className="cursor-pointer hover:opacity-70 transition-opacity" onClick={toggleMenu}>
              {isMenuOpen ? <RxCross2 className="text-2xl" /> : <RxHamburgerMenu className="text-2xl" />}
            </li>
            <Link href="/products">
              <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Products</li>
            </Link>
            <Link href="/projects">
              <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Projects</li>
            </Link>
            <Link href="/materioteca">
              <li className="hidden md:block cursor-pointer hover:underline underline-offset-4">Materioteca</li>
            </Link>
          </ul>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center">
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} alt="logo" width={80} height={40} className="object-contain" />
          </Link>
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

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed top-0 left-0 right-0 z-[100] bg-white text-black transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}
      `}>
        {/* Top Bar */}
        <div className="h-14 grid grid-cols-3 items-center px-6">
          {/* Close Button */}
          <div className="flex items-center">
            <button
              onClick={closeMenu}
              className="cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <RxCross2 className="text-2xl" />
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <Link href="/" onClick={closeMenu}>
              <Image src={logo} alt="logo" width={80} height={40} className="object-contain" />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex justify-end items-center gap-5">
            <button
              className="cursor-pointer p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <CiSearch className="text-2xl" />
            </button>
            <button
              className="cursor-pointer p-2 hover:opacity-70 transition-opacity"
              aria-label="User account"
            >
              <CiUser className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 " />

        {/* Content Area */}
        <div className="flex overflow-hidden font-[100]  font-gramatika -tracking-tighter">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between px-6 py-8 md:px-10 md:py-5 text-[15px]">
            {/* Navigation Links */}
            <div>
              <div className="flex gap-16 md:gap-24">
                {/* Column 1 */}
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/products"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Products
                  </Link>
                  <Link
                    href="/projects"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/materioteca"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Materioteca
                  </Link>
                  <Link
                    href="/cultura"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Cultura
                  </Link>
                </nav>

                {/* Column 2 */}
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    About
                  </Link>
                  <Link
                    href="/dealers"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Dealers
                  </Link>
                  <Link
                    href="/agenda"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Agenda
                  </Link>
                  <Link
                    href="/designer"
                    onClick={closeMenu}
                    className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    Designer
                  </Link>
                </nav>
              </div>

              {/* Be Inspired */}
              <div className="mt-8">
                <Link
                  href="/be-inspired"
                  onClick={closeMenu}
                  className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                >
                  Be inspired
                </Link>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              {/* Footer Links */}
              <div className="flex items-center gap-4 text-xs md:text-sm text-black">
                <Link
                  href="/downloads"
                  onClick={closeMenu}
                  className="hover:opacity-60 transition-opacity"
                >
                  Downloads
                </Link>
                <Link
                  href="/careers"
                  onClick={closeMenu}
                  className="hover:opacity-60 transition-opacity"
                >
                  Careers
                </Link>
                <Link
                  href="/contacts"
                  onClick={closeMenu}
                  className="hover:opacity-60 transition-opacity"
                >
                  Contacts
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-xs" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xs" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xs" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  aria-label="Pinterest"
                >
                  <FaPinterestP className="text-xs" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-xs" />
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 text-xs md:text-sm text-neutral-500">
                <span>Language:</span>
                <button className="text-black hover:opacity-60 transition-opacity cursor-pointer">
                  EN
                </button>
                <span>,</span>
                <button className="hover:opacity-60 transition-opacity cursor-pointer">
                  IT
                </button>
              </div>
            </div>
          </div>

          {/* Right Featured Image - hidden on mobile */}
          <div className="hidden lg:flex flex-col items-start w-[420px] xl:w-[500px] px-6 py-8 md:py-10">
            <Link
              href="/metal-affinities"
              onClick={closeMenu}
              className="text-sm text-red-600 hover:opacity-70 transition-opacity mb-2"
            >
              Metal Affinities
            </Link>
            <div className="relative w-full aspect-[7/3] overflow-hidden">
              <Image
                src="/data/metal-affinities.jpg"
                alt="Metal Affinities - Modern interior with abstract artwork and elegant furniture"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar