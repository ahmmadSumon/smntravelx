"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // GSAP animation effect
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
      });
      document.body.style.overflow = 'hidden'; // Disable scrolling on body when menu is open
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "100%",
        opacity: 0,
        ease: "power3.inOut",
      });
      document.body.style.overflow = 'auto'; // Re-enable scrolling on body when menu is closed
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-[999] bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          smnTravelX
        </Link>
        {/* Menu Button for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-xl text-white">
          <li className="hover:text-gray-400 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/destination">Destinations</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/tours">Tours</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/services">Services</Link></li>
          <li className="hover:text-gray-400 transition"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Fullscreen Menu for Mobile */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center space-y-8 text-2xl text-white md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        style={{ transform: "translateX(100%)", opacity: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="list-none p-0 m-0">
          <li className="hover:text-gray-400 transition" onClick={toggleMenu}><Link href="/">Home</Link></li>
          <li className="hover:text-gray-400 transition" onClick={toggleMenu}><Link href="/destination">Destinations</Link></li>
          <li className="hover:text-gray-400 transition" onClick={toggleMenu}><Link href="/tours">Tours</Link></li>
          <li className="hover:text-gray-400 transition" onClick={toggleMenu}><Link href="/services">Services</Link></li>
          <li className="hover:text-gray-400 transition" onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
