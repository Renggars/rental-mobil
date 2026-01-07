"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Tentang Kami", href: "/tentang-kami" },
    { title: "Armada", href: "/armada" },
    { title: "Blog", href: "/blog" },
    { title: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 px-4 py-4">
      <nav
        className="max-w-360 mx-auto flex justify-between items-center 
               sm:px-10 px-6 py-3 backdrop-blur-md bg-white/20 
               border border-white/30 rounded-2xl shadow-lg relative"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Rent Car Logo"
            width={130}
            height={35}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-slate-800 font-semibold text-lg 
                     hover:text-blue-600 transition-all 
                     px-2 lg:px-3 py-2 rounded-lg"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center gap-3">
          <Link
            href="https://wa.me/628123456789"
            target="_blank"
            className="hidden lg:flex items-center gap-2 
                   bg-[#25D366] text-white px-5 py-2.5 
                   rounded-xl font-bold text-lg 
                   hover:bg-[#20ba5a] shadow-md 
                   hover:shadow-green-200 
                   transition-all active:scale-95"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Hubungi Kami</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 text-2xl p-2 cursor-pointer"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full mt-2 p-6 
        bg-white backdrop-blur-xl rounded-2xl 
        border border-white/30 shadow-2xl 
        transition-all duration-300 ease-in-out md:hidden
        ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-800 font-bold text-xl 
                       py-3 border-b border-slate-100 
                       hover:text-blue-600 transition-all"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="https://wa.me/628123456789"
              className="flex items-center justify-center gap-3 
                     bg-green-500 hover:bg-green-600 text-white py-4 
                     rounded-xl font-bold text-lg mt-2"
            >
              <FaWhatsapp className="text-2xl" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
