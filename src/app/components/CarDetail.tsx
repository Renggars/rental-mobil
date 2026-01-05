"use client";

import { CarType } from "@/types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-50"} onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={
                    "relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                  }
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-semibold text-xl capitalize">
                        {car.name}
                      </h2>

                      <p className="flex-1 text-sm text-gray-600">
                        {car.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car)
                          .filter(
                            ([key]) =>
                              !["id", "image", "description"].includes(key)
                          ) // Filter key yang ingin disembunyikan
                          .map(([key, value]) => {
                            // Ubah nama properti menjadi lebih user-friendly
                            const displayKey =
                              {
                                price_per_day: "price per day",
                                fuel_type: "fuel type",
                              }[key] || key;

                            // Format agar setiap kata diawali huruf besar
                            const formattedKey = displayKey
                              .split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1)
                              )
                              .join(" ");

                            // Format nilai availability dan tampilkan
                            const displayValue =
                              key === "availability"
                                ? value
                                  ? "Tersedia"
                                  : "Tidak Tersedia"
                                : value;

                            return (
                              <div
                                className="flex justify-between gap-5 w-full text-right"
                                key={key}
                              >
                                <h4>{formattedKey}</h4>
                                <p>{displayValue}</p>
                              </div>
                            );
                          })}
                      </div>
                      <button
                        onClick={handleSewaWA}
                        className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
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
    </>
  );
};

export default CarDetail;
