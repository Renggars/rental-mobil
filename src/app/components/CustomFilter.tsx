"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { CustomFilterProps } from "../../../types";

const CustomFilter = ({ options, onChange }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onChange(value);
        }}
      >
        <div className="relative w-fit z-10">
          {/* BUTTON */}
          <ListboxButton
            className="relative w-full min-w-31.75 flex justify-between items-center
                       cursor-pointer rounded-lg bg-white py-2 px-3 text-left
                       shadow-md border border-slate-200 text-sm"
          >
            <span className="block truncate">{selected.title}</span>

            <Image
              src={"/chevron-up-down.svg"}
              alt="Open filter options"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </ListboxButton>

          {/* OPTIONS */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className="absolute mt-1 max-h-60 w-full overflow-auto
                         rounded-md bg-white py-1 text-sm
                         shadow-lg ring-1 ring-black ring-opacity-5
                         focus:outline-none z-20"
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ focus }) =>
                    `relative cursor-pointer select-none py-2 px-4
                     ${focus ? "bg-blue-600 text-white" : "text-gray-900"}`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
