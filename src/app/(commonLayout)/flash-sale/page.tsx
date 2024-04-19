"use client";
import AllFlashSale from "@/components/UI/AllFlashSale/AllFlashSale";
import { useGetAllProductsQuery } from "@/redux/api/products/productsApi";
import { TProduct } from "@/types/products.type";

const FlashSalePage = () => {
  // const res = await fetch("http://localhost:5000/api/v1/products", {
  //   next: { revalidate: 30 },
  // });

  // const { data: products } = await res.json();

  const { data: products, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return "Loading...";
  }

  console.log(products);

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
