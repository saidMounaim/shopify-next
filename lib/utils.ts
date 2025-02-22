import { currencySymbols } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//format price
export function formatPrice(amount: string, currencyCode: string) {
  const symbol = currencySymbols[currencyCode] || currencyCode;
  return `${symbol}${amount}`;
}
