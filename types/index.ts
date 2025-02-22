export interface ProductType {
  id: string;
  title: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        originalSrc: string;
        altText: string | null;
      };
    }[];
  };
}
