import Ratings from "@/components/shared/Ratings/Ratings";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      key={product._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <Ratings rating={product?.ratings} />
        <h2 className="card-title">
          <h2 className="truncate text-[18px]"> {product.title}</h2>

          <p className="badge badge-secondary w-full max-w-24 py-3">
            $ {product.price}
          </p>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/${product?.category}/${product._id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
