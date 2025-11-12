import ForkKnife from "../assets/icons/fork-knife.svg?react";
import Bed from "../assets/icons/bed.svg?react";
import PoliceCar from "../assets/icons/police-car.svg?react";
import Wrench from "../assets/icons/wrench.svg?react";
import Receipt from "../assets/icons/receipt.svg?react";

export function getRefundCategoryData(category: string) {
  switch (category) {
    case "food":
      return {
        icon: ForkKnife,
        label: "Alimentação",
        category,
      };
    case "hosting":
      return {
        icon: Bed,
        label: "Hospedagem",
        category,
      };
    case "transport":
      return {
        icon: PoliceCar,
        label: "Transporte",
        category,
      };
    case "services":
      return {
        icon: Wrench,
        label: "Serviços",
        category,
      };
    default:
      return {
        icon: Receipt,
        label: "Outros",
        category,
      };
  }
}

export function formatRefundValue(value: number | string): string {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numericValue)) {
    return "0,00";
  }

  return (numericValue / 100).toFixed(2).replace(".", ",");
}

export const categories = [
  { value: "food", label: "Alimentação" },
  { value: "hosting", label: "Hospedagem" },
  { value: "transport", label: "Transporte" },
  { value: "services", label: "Serviços" },
  { value: "other", label: "Outros" },
];
