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
        className="mt-12 padding-x padding-y max-width scroll-mt-20"
        id="armada"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Katalog Armada</h1>
          <p>Temukan mobil pilihan yang sesuai dengan kebutuhan Anda</p>
        </div>

        <div className="home__filters">
          <SearchBar onSearch={handleSearch} />

          <div className="home__filter-container">
            {/* Filter berdasarkan jumlah seats */}
            <CustomFilter
              title="Seats"
              options={seats}
              onChange={(option) => setSelectedSeats(option.value)}
            />

            {/* Filter berdasarkan tahun produksi */}
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              onChange={(option) => setSelectedYear(option.value)}
            />
          </div>
        </div>

        <div className="home__cars-wrapper">
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
            className="bg-primary-blue text-white px-10 py-3.5 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all text-center"
          >
            Lihat Semua Armada
          </Link>
        </div>
      </div>
      <BookingTerms />
    </main>
  );
}
