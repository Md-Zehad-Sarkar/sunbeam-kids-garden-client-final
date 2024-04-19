import OfferedTime from "@/components/shared/OfferedTime/OfferedTime";
import Ratings from "@/components/shared/Ratings/Ratings";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";

const FlashSaleCard = ({ flashSale }: { flashSale: TProduct }) => {
  const currentPrice = Number(flashSale.price);

  const offeredPrice = currentPrice - 100 * 0.1;

  const newOffer = offeredPrice.toFixed(2);

  return (
    <div
      key={flashSale._id}
      className="card w-full max-w-96 bg-base-100 shadow-xl hover:shadow-2xl"
    >
      <figure>
        <Image
          src={flashSale.image}
          alt="clothes"
          width={400}
          height={400}
          className="max-w-[300px] h-[250px]"
        />
      </figure>
      <div className="card-body">
        <p className="">
          Offered Price:
          <span className="badge badge-secondary max-w-24"> $ {newOffer}</span>
        </p>
        <OfferedTime />

        <Ratings rating={flashSale?.ratings} />

        <h2 className="card-title relative ">
          <h2 className="text-[18px] truncate">

          {flashSale.title}
          </h2>
          <p className="badge badge-secondary max-w-24 py-4 ">
            {flashSale.price}
          </p>
        </h2>
        <p>{flashSale.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/flash-sale/${flashSale._id}`}>
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
