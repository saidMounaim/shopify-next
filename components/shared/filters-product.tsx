import React from "react";
import FilterSearch from "./filter-search";
import FilterSort from "./filter-sort";

const FiltersProduct = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <FilterSearch />
      <FilterSort />
    </div>
  );
};

export default FiltersProduct;
