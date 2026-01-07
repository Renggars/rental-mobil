"use client";

import { CustomFilter, Hero, SearchBar } from "@/app/components";

import { useState } from "react";
import Link from "next/link";
import About from "@/app/components/About";
import { CarCard } from "@/app/components";
import BookingTerms from "@/app/components/BookingTerms";
import { cars } from "../../constants/data";
import { seats, yearsOfProduction } from "../../constants";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>("");
  const [selectedModel, setSelectedModel] = useState<string | null>("");
  const [selectedSeats, setSelectedSeats] = useState<number | null | string>(
    null
  );
  const [selectedYear, setSelectedYear] = useState<number | null | string>(
    null
  );

  const handleSearch = (brand: string, model: string) => {
    setSelectedBrand(brand);
    setSelectedModel(model);
  };

  // Filter data berdasarkan filter seats dan year
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

  const displayedCars = filteredCars.slice(0, 8);

  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <div
        className="mt-12 max-w-360 mx-auto sm:px-16 px-6 py-4 scroll-mt-20"
        id="armada"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Katalog Armada</h1>
          <p>Temukan mobil pilihan yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <SearchBar onSearch={handleSearch} />

          <div className="flex justify-start flex-wrap items-center gap-2">
            {/* Filter berdasarkan jumlah seats */}
            <CustomFilter
              options={seats}
              onChange={(option) => setSelectedSeats(option.value)}
            />

            {/* Filter berdasarkan tahun produksi */}
            <CustomFilter
              options={yearsOfProduction}
              onChange={(option) => setSelectedYear(option.value)}
            />
          </div>
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
          {displayedCars.map((car, index) => (
            <div
              key={car.id}
              className={`
                ${index >= 4 ? "hidden sm:block" : ""} 
                ${index >= 6 ? "sm:hidden 2xl:block" : ""}
              `}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Tidak ada armada yang cocok.</p>
          </div>
        )}

        <div className="flex justify-center mt-16">
          <Link
            href="/armada"
            className="bg-blue-600 text-white px-10 py-3.5 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-center"
          >
            Lihat Semua Armada
          </Link>
        </div>
      </div>
      <BookingTerms />
    </main>
  );
}
