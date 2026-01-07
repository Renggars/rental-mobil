"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { SearchManufacturerProps } from "../../../types";
import { manufacturers } from "../../../constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="relative w-full">
      <Combobox
        value={manufacturer}
        onChange={(val) => setManufacturer(val ?? "")}
      >
        {/* Input */}
        <div className="relative">
          <ComboboxButton className="absolute left-4 top-1/2 -translate-y-1/2">
            <Image src="/search-logo.png" alt="search" width={20} height={20} />
          </ComboboxButton>

          <ComboboxInput
            placeholder="Toyota"
            displayValue={(value: string) => value}
            onChange={(e) => setManufacturer(e.target.value)}
            className="
              w-full
              pl-12 pr-4 py-3
              rounded-full
              border border-gray-200
              text-sm
              focus:outline-none
              focus:ring-2 focus:ring-primary-blue
            "
          />

          {/* Dropdown */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ComboboxOptions
              className="
                absolute z-30 mt-2 max-h-60 w-full
                overflow-auto rounded-xl
                bg-white py-1 shadow-lg
                ring-1 ring-black/5
                focus:outline-none
              "
            >
              {manufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-pointer select-none px-4 py-2 text-sm ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
