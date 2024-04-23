"use client";
import FilterProducts from "@/components/UI/AllProducts/FilterProducts";
import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";

const ProductPage = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      <FilterProducts products={products?.data} />
    </div>
  );
};

export default ProductPage;
