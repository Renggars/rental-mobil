import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "../../../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-slate-800 border-t border-gray-100 pt-16 bg-white">
      {/* Bagian Atas: Logo & Links */}
      <div className="flex max-lg:flex-col flex-wrap justify-between gap-10 px-6 sm:px-16 max-w-360 mx-auto w-full">
        {/* Logo & Slogan */}
        <div className="flex flex-col justify-start items-start gap-6 max-w-75">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="logo"
              width={130}
              height={35}
              className="object-contain"
            />
          </Link>

          <p className="text-base text-gray-600 leading-relaxed">
            Solusi sewa mobil terbaik di Surabaya. Cari, pesan, dan sewa mobil
            impian Anda dengan mudah dan transparan.
          </p>
        </div>

        <div className="flex-1 flex flex-wrap max-sm:grid max-sm:grid-cols-2 justify-end gap-12 sm:gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-5 min-w-30">
              <h3 className="font-bold text-lg text-slate-900">{link.title}</h3>
              <div className="flex flex-col gap-3">
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm sm:text-base"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Legal */}
      <div className="mt-16 border-t border-gray-100 px-6 sm:px-16 py-10">
        <div className="max-w-360 mx-auto flex max-md:flex-col-reverse justify-between items-center gap-6 text-sm text-gray-600">
          <p className="font-medium text-center md:text-left">
            © 2026 CarRent. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-10 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
