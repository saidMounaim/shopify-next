// query get products
export const queryGetProducts = (searchQuery?: string) => {
  return `
        {
          products(first: 50, query: "${
            searchQuery ? `title:*${searchQuery}*` : ""
          }") {
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
