"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button
    type="submit"
    className={`-m-3 z-10 flex items-center justify-center ${otherClasses}`}
  >
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({
  onSearch,
}: {
  onSearch: (brand: string, model: string) => void;
}) => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(manufacturer, model);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col gap-4
        w-full max-w-3xl
        rounded-full
       py-2
        sm:flex-row sm:items-center
      "
    >
      {/* Manufacturer */}
      <div className="relative flex items-center flex-1">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/* Model */}
      <div className="relative flex items-center flex-1">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={20}
          height={20}
          className="absolute left-4 w-5 h-5"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
          className="
            w-full
            pl-12 pr-4 py-3
            rounded-full
            border border-gray-200
            focus:outline-none
            focus:ring-2 focus:ring-primary-blue
            text-sm
          "
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/* Desktop submit */}
      <SearchButton otherClasses="hidden sm:flex" />
    </form>
  );
};

export default SearchBar;
