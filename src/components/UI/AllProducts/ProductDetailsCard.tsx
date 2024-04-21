"use client";
import OfferedTime from "@/components/shared/OfferedTime/OfferedTime";
import Ratings from "@/components/shared/Ratings/Ratings";
import { addProductToCart } from "@/redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TProduct } from "@/types/products.type";
import Image from "next/image";

const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();

  //add product to cart handler
  const handleAddToCart = (product: TProduct) => {
    console.log("product", product);
    // dispatch(addProductToCart(product));
  };

  const currentPrice = Number(product.price);
  const offeredPrice = currentPrice - 100 * 0.1;
  const newOffer = offeredPrice.toFixed(2);
  return (
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
          <span className="badge badge-secondary max-w-24"> $ {newOffer}</span>
        </p>
        <div className="max-w-60">
          <OfferedTime />
        </div>
        <Ratings rating={product?.ratings} />
        <h2 className="card-title truncate">product name: {product?.title}</h2>
        <p>
          price:
          <span className="badge badge-secondary ml-2">$ {product?.price}</span>
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
  );
};

export default ProductDetailsCard;
