"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { useRouter, useSearchParams } from "next/navigation";

const FilterSort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSort = (value: string) => {
    if (value) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "sort",
        value: value,
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["sort"],
      });
      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <Select onValueChange={(value) => handleSort(value)}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="name-asc">Name: A to Z</SelectItem>
        <SelectItem value="name-desc">Name: Z to A</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterSort;
