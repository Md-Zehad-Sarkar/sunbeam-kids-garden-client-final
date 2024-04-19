import AllProducts from "@/components/UI/AllProducts/AllProducts";
import ProductsCard from "@/components/UI/AllProducts/ProductsCard";
import { TProduct } from "@/types/products.type";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://sunbeam-kids-garden-server.vercel.app/api/v1/products",
    {
      next: { revalidate: 30 },
    }
  );

  const { data: products } = await res.json();

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products?.map((product: TProduct) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
