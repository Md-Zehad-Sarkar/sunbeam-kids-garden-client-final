import { TProduct } from "@/types/products.type";
import TrendingProductCard from "./TrendingProductCard";
import Link from "next/link";

const Trending = async () => {
  const res = await fetch(
    "https://sunbeam-kids-garden-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );

  const { data: products } = await res.json();
  const sortedProduct = products.sort((a: TProduct, b: TProduct) => {
    return b.ratings - a.ratings;
  });
  const initialProduct = sortedProduct.slice(0, 6);
  const seeAllProducts = products.length > 6 ? initialProduct : products;

  return (
    <div className="mt-24 mb-10 mx-2">
      <div className="text-center mb-4 w-full max-w-[800px] mx-auto">
        <h3 className="mb-3">Explore our trending Kids items!</h3>
        <p className="text-justify">
          Discover a wide range of trendy and fun clothing options for your
          children at our online store. Our latest collections feature diverse
          designs tailored to match your satisfaction and your little one is
          style preferences. Rest assured that our products prioritize both
          comfort and style for your beloved sons and daughters. With modern
          designs, high-quality materials, and convenient payment options, we
          strive to make your shopping experience enjoyable and fulfilling.
          Visit our website now to find the perfect outfits for your favorite
          kids!
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold mb-8">Trending Products</h2>
        <Link href="/products">
          <button className="btn btn-secondary">See All</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {seeAllProducts?.slice(0, 6).map((product: TProduct) => (
          <TrendingProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
