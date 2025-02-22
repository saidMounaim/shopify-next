"use client";

import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { useRouter, useSearchParams } from "next/navigation";

const FilterSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: searchQuery,
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["query"],
      });
      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <div className="relative flex-grow">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-8"
        placeholder="Search products..."
        type="search"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default FilterSearch;
