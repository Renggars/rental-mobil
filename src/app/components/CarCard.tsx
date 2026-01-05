"use client";

import Image from "next/image";
import React, { useState } from "react";
import CarDetail from "./CarDetail";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { CarType } from "../../../types";

interface CarCard {
  car: CarType;
}

const CardCar = ({ car }: CarCard) => {
  const { name, year, transmission, price_per_day, image, seats } = car;
  const [isOpen, setIsOpen] = useState(false);

  const handleSewaWA = () => {
    const phoneNumber = "628123456789"; // Ganti dengan nomor WA Anda
    const message = `Halo Rentcar, saya ingin menyewa mobil *${name}* (${year}). Berapa ketersediaan untuk tanggal terdekat?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="
      flex items-center gap-1.5 
      text-[12px] md:text-[13px] font-bold
      text-blue-600 whitespace-nowrap 
      bg-blue-50 hover:bg-blue-600 hover:text-white
      px-4 py-2 rounded-xl
      border border-blue-100 hover:border-blue-600
      shadow-sm hover:shadow-md hover:shadow-blue-200
      transition-all duration-300 group/btn
    "
        >
          <span>Detail</span>
          <FaChevronRight className="text-[10px] transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">RP</span>
        {new Intl.NumberFormat("id-ID").format(price_per_day)}
        <span className="self-end text-[14px] font-semibold">/hari</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{transmission}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/seats.png"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{seats} Kursi</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/calendar.png"}
              width={20}
              height={20}
              alt="streering wheel"
            />
            <p className="text-[14px]">{year}</p>
          </div>
        </div>
      </div>

      {/* Actions (Vertical Buttons) */}
      <div className="w-full flex flex-col gap-3 mt-2">
        {/* Primary Button: WhatsApp */}
        <button
          onClick={handleSewaWA}
          className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
        >
          <FaWhatsapp className="text-xl" />
          Sewa Sekarang
        </button>
      </div>

      <CarDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        handleSewaWA={handleSewaWA}
        car={car}
      />
    </div>
  );
};

export default CardCar;
