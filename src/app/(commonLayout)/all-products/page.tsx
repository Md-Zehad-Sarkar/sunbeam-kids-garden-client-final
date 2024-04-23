"use client";
import ProductsCard from "@/components/UI/AllProducts/ProductsCard";
import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";

const AllProductsPage = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.data?.map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
