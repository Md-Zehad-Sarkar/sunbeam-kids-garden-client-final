"use client";

import { useState } from "react";
import ProductsCard from "@/components/UI/AllProducts/ProductsCard";
import { TProduct } from "@/types/products.type";

const FilterProducts = ({ products }: { products: TProduct[] }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<TProduct[]>(products);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    let filtered: TProduct[];

    switch (category) {
      case "kids-wear":
        filtered = products.filter(
          (product) => product.category === "kids-wear"
        );
        break;
      case "children-clothing":
        filtered = products.filter(
          (product) => product.category === "children-clothing"
        );
        break;
      case "babies-clothes":
        filtered = products.filter(
          (product) => product.category === "babies-clothes"
        );
        break;
      case "tops-wear":
        filtered = products.filter(
          (product) => product.category === "tops-wear"
        );
        break;
      case "bottoms-wear":
        filtered = products.filter(
          (product) => product.category === "bottoms-wear"
        );
        break;
      case "sleepwear":
        filtered = products.filter(
          (product) => product.category === "sleepwear"
        );
        break;
      case "dresses":
        filtered = products.filter((product) => product.category === "dresses");
        break;
      case "socks":
        filtered = products.filter((product) => product.category === "socks");
        break;
      case "outerwear":
        filtered = products.filter(
          (product) => product.category === "outerwear"
        );
        break;
      default:
        filtered = products;
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex gap-4">
      <div>
        <div>
          <p className="mb-1 border-l-2 border-red-500">
            <span className="ml-1">Filter</span>
          </p>
          <select
            onChange={handleCategoryChange}
            className="select select-info w-full max-w-[150px]"
          >
            <option value="">All</option>
            <option value="kids-wear">Kids Wear</option>
            <option value="children-clothing">Children Clothing</option>
            <option value="babies-cloths">Babies Clothes</option>
            <option value="tops-wear">Tops Wear</option>
            <option value="bottoms-wear">Bottoms Wear</option>
            <option value="sleepwear">Sleepwear</option>
            <option value="outerwear">Outerwear</option>
            <option value="dresses">Dresses</option>
            <option value="socks">Socks</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product: TProduct) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
