import { shopifyConfig } from "@/lib/shopify";

export const SHOPIFY_API_URL = `${shopifyConfig.storeUrl}/api/${shopifyConfig.apiVersion}/graphql.json`;

export const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CAD: "C$",
  AUD: "A$",
};

export const mapSortOption = (sortOption?: string) => {
  switch (sortOption) {
    case "price-asc":
      return { sortKey: "PRICE", reverse: false }; // Low to High
    case "price-desc":
      return { sortKey: "PRICE", reverse: true }; // High to Low
    case "name-asc":
      return { sortKey: "TITLE", reverse: false }; // A to Z
    case "name-desc":
      return { sortKey: "TITLE", reverse: true }; // Z to A
    default:
      return { sortKey: "TITLE", reverse: false }; // Default to A to Z
  }
};
