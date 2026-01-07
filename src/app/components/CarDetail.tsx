"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CarType } from "../../../types";

interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
  handleSewaWA: () => void;
}

const CarDetail = ({
  isOpen,
  closeModal,
  handleSewaWA,
  car,
}: CarDetailProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/35" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-5">
                {/* Tombol Close */}
                <button
                  type="button"
                  className="absolute top-2 right-2 p-2 rounded-full bg-primary-blue-100 z-10 bg-white cursor-pointer"
                  onClick={closeModal}
                >
                  <Image src="/close.svg" alt="Tutup" width={20} height={20} />
                </button>

                {/* Konten */}
                <div className="flex flex-col gap-4">
                  {/* Gambar */}
                  <div
                    className="relative w-full h-40 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: "url('/pattern.png')" }}
                  >
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                      {car.name}
                    </h2>

                    <p className="text-sm text-gray-600">{car.description}</p>

                    {/* Detail Mobil */}
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      {Object.entries(car)
                        .filter(
                          ([key]) =>
                            !["id", "image", "description"].includes(key)
                        )
                        .map(([key, value]) => {
                          const labelMap: Record<string, string> = {
                            price_per_day: "Harga per Hari",
                            fuel_type: "Jenis Bahan Bakar",
                            transmission: "Transmisi",
                            seats: "Jumlah Kursi",
                            year: "Tahun",
                            availability: "Ketersediaan",
                          };

                          const label =
                            labelMap[key] ??
                            key
                              .replace(/_/g, " ")
                              .replace(/\b\w/g, (c) => c.toUpperCase());

                          const displayValue =
                            key === "availability"
                              ? value
                                ? "Tersedia"
                                : "Tidak Tersedia"
                              : value;

                          return (
                            <div
                              key={key}
                              className="flex justify-between w-full gap-4"
                            >
                              <span className="text-gray-500">{label}</span>
                              <span className="font-medium">
                                {displayValue}
                              </span>
                            </div>
                          );
                        })}
                    </div>

                    {/* Tombol WA */}
                    <button
                      onClick={handleSewaWA}
                      className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
                    >
                      <FaWhatsapp size={20} />
                      Sewa Sekarang via WhatsApp
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetail;
