"use client";
import Ratings from "@/components/shared/Ratings/Ratings";
import { useAddToCartToDBMutation } from "@/redux/api/carts/cartsApi";
import { addProductToCart } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { authInfo } from "@/services/authService";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const TrendingProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const [addToCartToDB] = useAddToCartToDBMutation();
  const router = useRouter();
  const user = authInfo();
  const { email } = user;

  //add product to cart handler
  const handleAddToCart = async (product: TProduct) => {
    const id = product._id;
    delete product._id;

    const productObj = {
      id: id,
      email: email,
      ...product,
    };
    const res = await addToCartToDB(productObj).unwrap();

    if (res?.insertedId) {
      toast.success("Product Added to Cart successful");
      dispatch(addProductToCart(productObj));
      router.push("/checkout");
    }
    router.refresh();
  };
  return (
    <div
      key={product?._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product?.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <Ratings rating={product?.ratings} />

        <h2 className="card-title relative ">
          <h2 className="truncate text-[18px]">{product?.title}</h2>
          <p className="badge badge-secondary max-w-24 py-4 ">
            {product?.price}
          </p>
        </h2>
        <p>{product?.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-secondary"
          >
            add to cart
          </button>
          <button className="btn btn-secondary">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;
