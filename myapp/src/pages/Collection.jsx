import React, { useContext, useState,  useMemo } from "react";
import { ShopContext } from "../components/ShopContext";
import dropDown from "../assets/down-arrow.png";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products = [] } = useContext(ShopContext); // default to [] to avoid undefined
  const [showFilter, setShowFilter] = useState(false);

  // filter state
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);

  // sort state
  const [sort, setSort] = useState("relevant"); // "relevant" | "low-high" | "high-low"

  // Toggle handlers (use event.currentTarget.value for safety)
  const toggleCategory = (e) => {
    const val = e.currentTarget.value;
    setCategory((prev) => (prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]));
  };

  const toggleSubCategory = (e) => {
    const val = e.currentTarget.value;
    setSubCategory((prev) => (prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]));
  };

  // Clear filters
  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSort("relevant");
  };

  // Derived filtered & sorted products using useMemo for performance
  const filteredProducts = useMemo(() => {
    let result = Array.isArray(products) ? products.slice() : [];

    if (category.length > 0) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      result = result.filter((item) => subcategory.includes(item.type));
    }

    // Sorting
    if (sort === "low-high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "high-low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } // "relevant" keeps original order

    return result;
  }, [products, category, subcategory, sort]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      {/* LEFT FILTER SECTION */}
      <div className="w-full sm:w-1/4 lg:w-1/5">
        <div
          onClick={() => setShowFilter((s) => !s)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 select-none"
          role="button"
          aria-expanded={showFilter}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowFilter((s) => !s);
          }}
        >
          FILTERS
          {/* show icon on small screens; rotate depending on state */}
          <img
            className={`h-3 sm:hidden transform transition-transform ${showFilter ? "rotate-180" : ""}`}
            src={dropDown}
            alt="toggle filters"
          />
        </div>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="men"
                checked={category.includes("men")}
                aria-checked={category.includes("men")}
              />
              Men
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="women"
                checked={category.includes("women")}
                aria-checked={category.includes("women")}
              />
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="kids"
                checked={category.includes("kids")}
                aria-checked={category.includes("kids")}
              />
              Kids
            </label>
          </div>
        </div>

        {/* Sub Filter */}
        <div className={`border border-gray-300 my-5 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value="topwear"
                checked={subcategory.includes("topwear")}
                aria-checked={subcategory.includes("topwear")}
              />
              Topwear
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value="bottomwear"
                checked={subcategory.includes("bottomwear")}
                aria-checked={subcategory.includes("bottomwear")}
              />
              Bottomwear
            </label>
            <label className="flex gap-2 items-center">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleSubCategory}
                value="winterwear"
                checked={subcategory.includes("winterwear")}
                aria-checked={subcategory.includes("winterwear")}
              />
              Winterwear
            </label>
          </div>
        </div>

        {/* Clear filters / applied count */}
        <div className={`pl-5 py-1 ${showFilter ? "" : "hidden"} sm:block`}>
          <div className="flex items-center gap-2">
            <button
              onClick={clearFilters}
              className="text-sm px-2 py-1 border rounded hover:bg-gray-100"
              aria-label="Clear filters"
            >
              Clear filters
            </button>
            <span className="text-sm text-gray-600">{filteredProducts.length} items</span>
          </div>
        </div>
      </div>

      {/* RIGHT PRODUCTS SECTION */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 items-center">
          <Title text1="All" text2="COLLECTIONS" />

          {/* Product Sort */}
          <div className="flex items-center gap-3">
            <label className="text-sm hidden sm:block">Sort:</label>
            <select
              className="border-2 border-gray-300 text-sm px-2"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="relevant">Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-8">No products found.</div>
          ) : (
            filteredProducts.map((item) => (
              <ProductItems
                key={item._id} // use unique id
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
