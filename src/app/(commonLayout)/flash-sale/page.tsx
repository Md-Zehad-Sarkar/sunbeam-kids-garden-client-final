import AllFlashSale from "@/components/UI/AllFlashSale/AllFlashSale";
import { TProduct } from "@/types/products.type";

const FlashSalePage = async () => {
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
