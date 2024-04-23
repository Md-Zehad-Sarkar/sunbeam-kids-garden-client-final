"use client";
import FilterProducts from "@/components/UI/AllProducts/FilterProducts";
import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";

const ProductPage = () => {
  // const res = await fetch("http://localhost:5000/api/v1/products", {
  //   cache: "no-store",
  // });
  // const { data: products } = await res.json();

  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      {/* <FilterProducts /> */}
      <FilterProducts products={products?.data} />
    </div>
  );
};

export default ProductPage;
