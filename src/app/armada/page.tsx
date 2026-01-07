"use client";

import { useState } from "react";
import {
  SearchBar,
  CustomFilter,
  CustomButton,
  CarCard,
} from "@/app/components";
import { Car, Users, Calendar, Fuel } from "lucide-react";
import HeroAbout from "../components/HeroAbout";
import { seats, yearsOfProduction } from "../../../constants";
import { cars } from "../../../constants/data";

const Page = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>("");
  const [selectedModel, setSelectedModel] = useState<string | null>("");
  const [selectedSeats, setSelectedSeats] = useState<number | null | string>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<number | null | string>(
    null
  );
  const [showAll, setShowAll] = useState(false);

  const handleSearch = (brand: string, model: string) => {
    setSelectedBrand(brand);
    setSelectedModel(model);
  };

  const filteredCars = cars.filter((car) => {
    return (
      (selectedSeats && typeof selectedSeats === "number"
        ? car.seats === selectedSeats
        : true) &&
      (selectedYear && typeof selectedYear === "number"
        ? car.year === selectedYear
        : true) &&
      (selectedBrand
        ? car.brand.toLowerCase().includes(selectedBrand.toLowerCase())
        : true) &&
      (selectedModel
        ? car.model.toLowerCase().includes(selectedModel.toLowerCase())
        : true)
    );
  });

  const displayedCars = showAll ? filteredCars : filteredCars.slice(0, 8);

  const handleRekomendasiWA = () => {
    const phoneNumber = "628123456789"; // ganti nomor CS
    const message = `Halo Rentcar
Saya ingin meminta rekomendasi mobil yang cocok untuk kebutuhan perjalanan saya.
Bisa dibantu ya?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="overflow-hidden bg-slate-50/50">
      <HeroAbout />

      {/* Stats Singkat Armada */}
      <div className="max-w-360 mx-auto px-4 sm:px-16 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* CARD */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl">
              <Car className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Total Armada
              </p>
              <p className="font-bold text-sm sm:text-base text-slate-900">
                50+ Unit
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-green-50 rounded-lg sm:rounded-xl">
              <Users className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs text-slate-500">Kapasitas</p>
              <p className="font-bold text-sm sm:text-base text-slate-900">
                2 – 15 Seats
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-orange-50 rounded-lg sm:rounded-xl">
              <Calendar className="text-orange-600 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Tahun Unit
              </p>
              <p className="font-bold text-sm sm:text-base text-slate-900">
                2020 – 2024
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
              <Fuel className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs text-slate-500">Kondisi</p>
              <p className="font-bold text-sm sm:text-base text-slate-900">
                Full BBM
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        className="mt-12 max-w-360 mx-auto sm:px-16 px-6 py-4 scroll-mt-20"
        id="armada"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold text-slate-900">
              Katalog Armada
            </h1>
            <p className="text-slate-600 mt-2 lg:text-lg">
              Temukan mobil pilihan yang sesuai dengan kebutuhan perjalanan Anda
              di Surabaya.
            </p>
          </div>

          <div className="flex items-center gap-2 lg:text-lg font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            {filteredCars.length} Mobil Tersedia
          </div>
        </div>

        {/* Filter */}
        <SearchBar onSearch={handleSearch} />

        <div className="flex flex-wrap justify-end gap-4 mt-3 mb-7">
          <CustomFilter
            options={seats}
            onChange={(option) => setSelectedSeats(option.value)}
          />
          <CustomFilter
            options={yearsOfProduction}
            onChange={(option) => setSelectedYear(option.value)}
          />
        </div>

        {/* Cars Grid */}
        {displayedCars.length > 0 ? (
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {displayedCars.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[40vh] bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <div className="p-6 bg-slate-50 rounded-full mb-4">
              <Car size={48} className="text-slate-300" />
            </div>
            <p className="text-center text-slate-500 text-lg font-semibold">
              Maaf, mobil yang Anda cari tidak ditemukan.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Show All */}
        {filteredCars.length > 8 && !showAll && (
          <div className="flex justify-center mt-16">
            <CustomButton
              title="Lihat Semua Armada"
              containerStyles="bg-blue-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 cursor-pointer"
              handleClick={() => setShowAll(true)}
            />
          </div>
        )}
      </section>

      {/* Section Tambahan: Kenapa Sewa di Kami? */}
      <section className="py-20 bg-slate-900 text-white mt-20">
        <div className="max-w-360 mx-auto px-6 sm:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Butuh Rekomendasi Mobil?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Tim kami siap membantu memilihkan armada yang paling efisien untuk
              rute perjalanan Anda. Hubungi kami untuk konsultasi gratis.
            </p>
            <button
              onClick={handleRekomendasiWA}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 cursor-pointer"
            >
              Tanya CS via WhatsApp
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-xl mb-2 text-blue-400">
                Lepas Kunci
              </h4>
              <p className="text-sm text-slate-400">
                Kebebasan berkendara sendiri dengan proses syarat mudah.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-xl mb-2 text-blue-400">
                Dengan Sopir
              </h4>
              <p className="text-sm text-slate-400">
                Duduk manis dan nikmati perjalanan dengan driver pro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
