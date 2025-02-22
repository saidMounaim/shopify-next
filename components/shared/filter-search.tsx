import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const FilterSearch = () => {
  return (
    <div className="relative flex-grow">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input className="pl-8" placeholder="Search products..." type="search" />
    </div>
  );
};

export default FilterSearch;
