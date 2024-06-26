"use client";

import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";
import dynamic from "next/dynamic";
const ProductTableRow = dynamic(
  () => import("@/components/UI/Dashboard/allProducts/ProductTableRow"),
  {
    ssr: false,
  }
);

const AdminProductsPage = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="mt-12 mb-10">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="text-lg">
            <tr>
              <th>Sl no</th>
              <th>Items</th>
              <th>Brand</th>
              <th>ProductId</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product: TProduct, i: string) => (
              <ProductTableRow key={product?._id} product={product} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;
