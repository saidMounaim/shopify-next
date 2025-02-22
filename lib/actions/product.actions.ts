"use server";

import { SHOPIFY_API_URL } from "@/constants";
import { queryGetProducts } from "../queries/product.queries";
import { shopifyHeaders } from "../shopify";

export async function getProducts() {
  const response = await fetch(SHOPIFY_API_URL, {
    method: "POST",
    headers: shopifyHeaders,
    body: JSON.stringify({ query: queryGetProducts }),
  });

  const { data } = await response.json();
  if (!data) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.products.edges.map((edge: any) => edge.node);
}
