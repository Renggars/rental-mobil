"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex xl:flex-row flex-col gap-5 z-0 w-full ">
      <div className="flex-1 pt-24 xl:pt-36 px-6 sm:px-14  max-w-360 lg:max-w-2xl xl:pr-0">
        <h1 className="2xl:text-[72px] sm:text-[64px] lg:max-w-2xl text-4xl font-extrabold text-slate-900 leading-[1.4] sm:leading-[1.2] lg:leading-[1.1]">
          Cari, Pesan, atau Sewa Mobil — Cepat dan Tanpa Ribet!
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light mt-2 leading-relaxed">
          Permudah pengalaman sewa mobil Anda dengan proses pemesanan yang
          praktis. Rentcar menyediakan berbagai pilihan armada untuk segala
          kebutuhan perjalanan Anda.
        </p>
        <div className="mt-6">
          <Link
            href="#armada"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full
                       shadow-lg shadow-blue-200 hover:bg-blue-700
                       active:scale-95 transition-all text-base"
          >
            Lihat Armada
          </Link>
        </div>
      </div>

      {/* Kanan */}
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative w-[70%] xl:w-[90%] xl:h-full h-50 sm:h-112.5 md:h-147.5 -z-10 -top-20 sm:-top-52 md:-top-48 xl:top-0">
          {/* Mobil Alphard */}
          <Image
            src="/images/toyota-alphard.png"
            alt="Rentcar - Sewa Mobil Toyota Alphard"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          className="absolute 
            top-[55%] sm:top-[30%] xl:-top-10 -right-[40%] sm:-right-1/2 md:-right-[40%]  xl:-right-1/2 bg-repeat-round w-full h-62.5 sm:h-125 md:h-137.5 xl:h-screen overflow-hidden -z-20 "
        >
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-fill"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
