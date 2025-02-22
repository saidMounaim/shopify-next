import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FilterSort = () => {
  return (
    <Select>
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
