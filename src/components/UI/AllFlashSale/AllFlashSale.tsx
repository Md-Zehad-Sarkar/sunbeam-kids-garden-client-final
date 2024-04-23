import { TProduct } from "@/types/products.type";

import dynamic from "next/dynamic";

const FlashSaleCard = dynamic(() => import("../Home/FlashSaleCard"), {
  ssr: false,
});

const AllFlashSale = ({ flashSales }: { flashSales: TProduct[] }) => {
  return (
    <div className="mt-24 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {flashSales?.map((flashSale: TProduct) => (
          <FlashSaleCard key={flashSale?._id} flashSale={flashSale} />
        ))}
      </div>
    </div>
  );
};

export default AllFlashSale;
