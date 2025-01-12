import React, { useState } from "react";
import { allProducts } from "../../components/common/data";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../components/Context/CartContext";

const Products = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleSearch = (term) => {
    const lowerCaseSearchTerm = term.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = () => {
    const filtered = allProducts.filter((product) => {
      const price = parseFloat(product.price);
      const min = parseFloat(minPrice) || 0;
      const max = parseFloat(maxPrice) || Infinity;
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setFilteredProducts(allProducts);
  };

  return (
    <div>
      <div className="w-[390px] lg:w-[1360px] mx-auto mb-[100px] lg:mb-[175px] grid grid-cols-5 gap-10 divide-x divide-[#f3e3de]">
        <div className="mt-20 col-span-4">
          <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
            <div className="h-[3px] w-[50px] bg-gradient-to-l from-[#86371C]"></div>
            <h2
              className="text-[16px] text-[#86371C]"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              Our Products
            </h2>
            <div className="h-[3px] w-[50px] bg-gradient-to-r from-[#86371C] lg:hidden"></div>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-12">
            {filteredProducts?.map((e, i) => (
              <div
                className="border-[#ffddd15f] bg-[#fbded42f] rounded-md"
                key={i}>
                <div className="h-[200px]">
                  <img
                    src={e?.image}
                    alt=""
                    className="h-full w-full object-contain "
                  />
                </div>
                <div className="px-3 pb-3">
                  <p
                    className="text-[16px] font-medium text-black mt-2"
                    style={{ fontFamily: "bakilda_historiregular" }}>
                    {e?.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p
                      className="text-[15px] text-justify mt-1 font-light tracking-[0.5px]"
                      style={{
                        fontFamily: "value_sans_promedium",
                      }}>
                      <span className="font-medium">Price:</span>{" "}
                      <span className="text-red-500">{e?.price} BDT</span>
                    </p>
                    <p
                      className="text-[15px] text-justify mt-1 font-light tracking-[0.5px] flex justify-normal items-center gap-1"
                      style={{
                        fontFamily: "value_sans_promedium",
                      }}>
                      {e?.rating}
                      <FaStar className="text-orange-500 text-[0.9rem]" />
                    </p>
                  </div>
                  <button
                    className="ml-auto border border-[#86371C] flex justify-normal items-center gap-3 px-3 py-0.5 rounded-[5px] text-[#86371C] mt-3"
                    onClick={() => addToCart(e)}>
                    Add Cart <FaCartShopping />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 pl-5">
          <div className="flex justify-center lg:justify-normal items-center gap-[10px]">
            <h2
              className="text-[15px] text-[#86371C] border-0 border-b border-[#86371C]"
              style={{
                fontFamily: "Lemonada, cursive",
              }}>
              Product Filter and Search
            </h2>
          </div>
          <div className="mt-7">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                className="border border-[#86371C] h-7 w-full px-3"
                value={searchTerm}
                placeholder="Search by title"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleSearch(e.target.value);
                }}
              />
            </div>

            {/* Filter by Price */}
            <div>
              <p className="text-[#86371C] mb-2 mt-4">Filter by Price</p>
              <div className="flex flex-col items-center gap-3">
                <input
                  type="number"
                  placeholder="Min Price"
                  className="border border-[#86371C] h-7 px-3 w-full"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  className="border border-[#86371C] h-7 px-3 w-full"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <div className="flex justify-end items-center gap-3 ml-auto">
                  <button
                    onClick={handleFilter}
                    className="bg-[#86371C] text-white px-3 py-1">
                    Filter
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-gray-400 text-white px-3 py-1">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
