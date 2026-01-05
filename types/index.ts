import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacture: string) => void;
}

export interface CarType {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  seats: number;
  price_per_day: number;
  fuel_type: string;
  transmission: string;
  image: string;
  description: string;
  availability: boolean;
}

export interface OptionType {
  title: string;
  value: string | number;
}

export type CustomFilterProps = {
  title: string;
  options: OptionType[];
  onChange: (option: OptionType) => void;
};
