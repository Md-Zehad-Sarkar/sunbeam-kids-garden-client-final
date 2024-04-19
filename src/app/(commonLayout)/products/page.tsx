import FilterProducts from "@/components/UI/AllProducts/FilterProducts";

const ProductPage = async () => {
  const res = await fetch(
    "https://sunbeam-kids-garden-server.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );

  const { data: products } = await res.json();

  return (
    <div className="mt-24 mb-10">
      <h2 className="mb-8">All Products</h2>
      <FilterProducts products={products} />
    </div>
  );
};

export default ProductPage;
