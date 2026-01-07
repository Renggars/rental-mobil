"use client";

import Image from "next/image";
import { useState } from "react";
import CarDetail from "./CarDetail";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { CarType } from "../../../types";

interface CarCardProps {
  car: CarType;
}

const CardCar = ({ car }: CarCardProps) => {
  const { name, year, transmission, price_per_day, image, seats } = car;
  const [isOpen, setIsOpen] = useState(false);

  const handleSewaWA = () => {
    const phoneNumber = "628123456789";
    const message = `Halo Rentcar, saya ingin menyewa mobil *${name}* (${year}). Berapa ketersediaan untuk tanggal terdekat?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="
        group
        flex flex-col
        rounded-3xl
        bg-white
        border border-gray-100
        p-6
        shadow-sm
        hover:shadow-xl hover:shadow-blue-100
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-bold text-slate-900">{name}</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="
            flex items-center gap-1.5
            text-xs md:text-sm font-bold
            text-blue-600
            bg-blue-50
            px-4 py-2
            rounded-xl
            border border-blue-100
            hover:bg-blue-600 hover:text-white hover:border-blue-600
            shadow-sm hover:shadow-md hover:shadow-blue-200
            transition-all duration-300
            group/btn cursor-pointer
          "
        >
          Detail
          <FaChevronRight className="text-[10px] transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Price */}
      <p className="mt-6 flex items-end gap-1 text-[32px] font-extrabold text-slate-900">
        <span className="text-3xl font-semibold">Rp</span>
        {new Intl.NumberFormat("id-ID").format(price_per_day)}
        <span className="text-xl font-semibold">/hari</span>
      </p>

      {/* Image */}
      <div className="relative w-full h-40 my-4">
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Specs */}
      <div className="mt-2 grid grid-cols-3 gap-4 text-gray-600">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/steering-wheel.svg"
            width={20}
            height={20}
            alt="transmission"
          />
          <p className="text-sm">{transmission}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image src="/seats.png" width={20} height={20} alt="seats" />
          <p className="text-sm">{seats} Kursi</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image src="/calendar.png" width={20} height={20} alt="year" />
          <p className="text-sm">{year}</p>
        </div>
      </div>

      {/* Action */}
      <div className="mt-6">
        <button
          onClick={handleSewaWA}
          className="
            w-full
            flex items-center justify-center gap-2
            py-3
            rounded-xl
            bg-green-500
            text-white
            font-bold
            hover:bg-green-600
            transition-colors
            shadow-lg shadow-green-100
            active:scale-95 cursor-pointer
          "
        >
          <FaWhatsapp className="text-xl" />
          Sewa Sekarang
        </button>
      </div>

      {/* Modal */}
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
