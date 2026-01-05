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

  return (
    <main className="overflow-hidden bg-slate-50/50">
      {/* Hero Section yang Konsisten */}
      <HeroAbout />

      {/* Stats Singkat Armada */}
      <div className="max-w-360 mx-auto px-6 sm:px-16 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Car className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Total Armada</p>
              <p className="font-bold text-slate-900">50+ Unit</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <Users className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Kapasitas</p>
              <p className="font-bold text-slate-900">2 - 15 Seats</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <Calendar className="text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Tahun Unit</p>
              <p className="font-bold text-slate-900">2020 - 2024</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <Fuel className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Kondisi</p>
              <p className="font-bold text-slate-900">Full BBM</p>
            </div>
          </div>
        </div>
      </div>

      <section
        className="mt-16 padding-x padding-y max-width scroll-mt-20"
        id="armada"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="home__text-container mt-0!">
            <h1 className="text-4xl font-extrabold text-slate-900">
              Katalog Armada
            </h1>
            <p className="text-slate-600 mt-2">
              Temukan mobil pilihan yang sesuai dengan kebutuhan perjalanan Anda
              di Surabaya.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {filteredCars.length} Mobil Tersedia
          </div>
        </div>

        {/* Filter Section */}
        <div className="home__filters bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-12">
          <SearchBar onSearch={handleSearch} />

          <div className="home__filter-container">
            <CustomFilter
              title="Kapasitas Kursi"
              options={seats}
              onChange={(option) => setSelectedSeats(option.value)}
            />
            <CustomFilter
              title="Tahun Produksi"
              options={yearsOfProduction}
              onChange={(option) => setSelectedYear(option.value)}
            />
          </div>
        </div>

        {/* Grid Cars */}
        {displayedCars.length > 0 ? (
          <div className="home__cars-wrapper">
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

        {/* See All Button */}
        {filteredCars.length > 8 && !showAll && (
          <div className="flex justify-center mt-16">
            <CustomButton
              title="Lihat Semua Armada"
              containerStyles="bg-blue-600 text-white rounded-xl px-8 py-4 font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              handleClick={() => setShowAll(true)}
            />
          </div>
        )}
      </section>

      {/* Section Tambahan: Kenapa Sewa di Kami? */}
      <section className="py-20 bg-slate-900 text-white mt-20">
        <div className="max-width padding-x grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Butuh Rekomendasi Mobil?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Tim kami siap membantu memilihkan armada yang paling efisien untuk
              rute perjalanan Anda. Hubungi kami untuk konsultasi gratis.
            </p>
            <a
              href="https://wa.me/your-number"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              Tanya CS via WhatsApp
            </a>
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
