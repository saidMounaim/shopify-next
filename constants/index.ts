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
