import FiltersProduct from "@/components/shared/filters-product";
import ProductCard from "@/components/shared/product-card";
import { getProducts } from "@/lib/actions/product.actions";
import { ProductType } from "@/types";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = ((await searchParams).query as string) || "";
  const products = await getProducts(query);
  return (
    <main className="container py-8 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <FiltersProduct />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Suspense fallback={<div>Loading...</div>}>
          {products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
