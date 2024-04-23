import UpdateProduct from "@/components/UI/Dashboard/UpdateProduct/UpdateProduct";
import React from "react";
type TProductId = {
  params: {
    productId: string;
  };
};

const AdminUpdateProductPage = async ({ params }: TProductId) => {
  const data = await fetch(
    `http://localhost:5000/api/v1/single-products/${params.productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const products = await data.json();

  return (
    <div>
      <UpdateProduct products={products} />
    </div>
  );
};

export default AdminUpdateProductPage;
