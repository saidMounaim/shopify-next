import { LATEST_API_VERSION } from "@shopify/shopify-api";

export const shopifyConfig = {
  storeUrl: process.env.SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  apiVersion: LATEST_API_VERSION,
};

export const shopifyHeaders = {
  "X-Shopify-Storefront-Access-Token": shopifyConfig.storefrontAccessToken,
  "Content-Type": "application/json",
};
