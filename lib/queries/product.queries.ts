import { mapSortOption } from "@/constants";

// query get products
export const queryGetProducts = (searchQuery?: string, sortOption?: string) => {
  const { sortKey, reverse } = mapSortOption(sortOption);
  return `
        {
          products(first: 50, query: "${
            searchQuery ? `title:*${searchQuery}*` : ""
          }", sortKey: ${sortKey}, reverse: ${reverse}) {
            edges {
              node {
                id
                title
                handle
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `;
};
