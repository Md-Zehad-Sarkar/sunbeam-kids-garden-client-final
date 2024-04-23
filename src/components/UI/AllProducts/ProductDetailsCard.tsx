"use client";
import OfferedTime from "@/components/shared/OfferedTime/OfferedTime";
import ProductReviews from "@/components/shared/ProductReviews/ProductReviews";
import Ratings from "@/components/shared/Ratings/Ratings";
import { useAddToCartToDBMutation } from "@/redux/api/carts/cartsApi";
import { addProductToCart } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { authInfo } from "@/services/authService";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const [addToCartToDB] = useAddToCartToDBMutation();
  const router = useRouter();
  const user = authInfo();
  const { email } = user;

  //add product to cart handler
  const handleAddToCart = async (product: TProduct) => {

    if (!email) {
      router.push("/login");
      return;
    }
    
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
    toast.success("Product Added to Cart successful");
    router.push("/checkout");
    router.refresh();
  };

  const currentPrice = Number(product.price);
  const offeredPrice = currentPrice - 100 * 0.1;
  const newOffer = offeredPrice.toFixed(2);
  return (
    <div className="max-w-[800px] bg-base-100  mt-24 mb-10 mx-auto">
      <div className="card max-w-[800px] bg-base-100 shadow-xl mt-24 mb-10 mx-auto">
        <figure>
          <Image
            src={product?.image}
            alt="fashion image"
            width={500}
            height={500}
            className="max-w-[800px] h-[400px]"
          />
        </figure>
        <div className="card-body">
          <p className="">
            Offered Price:
            <span className="badge badge-secondary max-w-24">
              {" "}
              $ {newOffer}
            </span>
          </p>
          <div className="max-w-60">
            <OfferedTime />
          </div>
          <Ratings rating={product?.ratings} />
          <h2 className="card-title truncate">
            product name: {product?.title}
          </h2>
          <p>
            price:
            <span className="badge badge-secondary ml-2">
              $ {product?.price}
            </span>
          </p>
          <p>brand: {product?.brand}</p>
          <p>category: {product?.category}</p>
          <p>description: {product?.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-secondary"
            >
              Add To Cart
            </button>
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
      <ProductReviews productId={product?._id} />
    </div>
  );
};

export default ProductDetailsCard;
