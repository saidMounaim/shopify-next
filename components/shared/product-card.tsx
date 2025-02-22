import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ProductType } from "@/types";
import { formatPrice } from "@/lib/utils";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Card>
      <CardHeader className="p-0">
        <Image
          src={product.images.edges[0].node.originalSrc}
          alt={product.title}
          width={300}
          height={200}
          className="object-cover w-full h-[200px]"
        />
      </CardHeader>
      <CardContent className="pt-4">
        <CardTitle className="text-lg">{product.title}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-lg font-bold">
          {formatPrice(
            product.priceRange.minVariantPrice.amount,
            product.priceRange.minVariantPrice.currencyCode
          )}
        </span>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
