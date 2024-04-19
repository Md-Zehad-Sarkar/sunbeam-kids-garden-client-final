import FlashSaleCard from "./FlashSaleCard";
import Link from "next/link";
import { TProduct } from "@/types/products.type";

const FlashSale = async () => {
  const res = await fetch(
    "https://sunbeam-kids-garden-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );

  const { data: products } = await res.json();

  const flashSales = products.filter(
    (product: TProduct) => product.flashSale === true
  );
  const initialData = flashSales.slice(0, 4);
  const viewAllData = flashSales.length > 4 ? initialData : flashSales;
  const sortedViewAllData = viewAllData.sort((a: TProduct, b: TProduct) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="mt-24 mb-10">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-3xl font-semibold mb-3">Flash Sale</h2>
        <Link href="/flash-sale">
          <button className="btn btn-secondary ">See All</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {sortedViewAllData?.map((flashSale: TProduct) => (
          <FlashSaleCard key={flashSale._id} flashSale={flashSale} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
