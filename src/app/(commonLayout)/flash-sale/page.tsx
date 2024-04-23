"use client";
import AllFlashSale from "@/components/UI/AllFlashSale/AllFlashSale";
import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";

const FlashSalePage = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  const flashSales = products?.data?.filter(
    (product: TProduct) => product.flashSale === true
  );

  const sortedFlashSales = flashSales.sort((a: TProduct, b: TProduct) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div>
      <h2>Flash Sale</h2>
      <AllFlashSale flashSales={sortedFlashSales} />
    </div>
  );
};

export default FlashSalePage;
