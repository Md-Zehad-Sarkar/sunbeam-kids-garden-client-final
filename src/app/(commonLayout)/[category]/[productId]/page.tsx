// "use client";
import ProductDetailsCard from "@/components/UI/AllProducts/ProductDetailsCard";
import { TProduct } from "@/types/products.type";

type TProductIdParams = {
  params: {
    productId: string;
  };
};

//generate static data (ssg)
const generatedStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");

  const { data: products } = await res.json();
  console.log(products);
  return products?.slice(0, 10)?.map((product: TProduct) => ({
    productId: product._id,
  }));
};

const ProductDetailsPage = async ({ params }: TProductIdParams) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const { data: product } = await res.json();

  return (
    <div>
      <ProductDetailsCard product={product} />
    </div>
  );
};

export default ProductDetailsPage;
