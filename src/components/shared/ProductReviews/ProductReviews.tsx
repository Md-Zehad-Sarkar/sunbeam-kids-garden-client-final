"use client";
import KidsForm from "@/forms/KidsForm";
import KidsTextArea from "@/forms/KidsTextArea";
import {
  useAddReviewToDBMutation,
  useGetAllReviewsFromDBQuery,
} from "@/redux/api/reviews/reviewsApi";
import { authInfo } from "@/services/authService";
import { TReview } from "@/types/products.type";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ProductReviews = ({ productId }: { productId?: string }) => {
  const [addReviewToDB] = useAddReviewToDBMutation();
  const { data: reviewsData, isLoading } = useGetAllReviewsFromDBQuery({});

  const user = authInfo();
  const { name, email, image, role } = user;

  if (isLoading) {
    return "Loading...";
  }

  // filter review product wise
  const productReview = reviewsData?.data?.filter(
    (reviews: TReview) => reviews?.productId === productId
  );

  const onSubmit = async (data: FieldValues) => {
    const reviewData = {
      name,
      email,
      image,
      role,
      ...data,
      productId,
      date: new Date().toLocaleDateString(),
    };

    const res = await addReviewToDB(reviewData).unwrap();
    if (res?.insertedId) {
      toast.success("Your reviews has been success");
    }
  };
  return (
    <div>
      <h2 className="text-3xl">Customers Review</h2>
      {user?.email && (
        <KidsForm onSubmit={onSubmit}>
          <KidsTextArea
            name="reviews"
            label="Write Reviews"
            placeholder="Write your review about this products"
          />
          <button type="submit" className="btn-ghost btn">
            Review
          </button>
        </KidsForm>
      )}
      <div className="mt-20">
        {productReview?.map((review: TReview) => (
          <div key={review?._id}>
            <div className="flex gap-3">
              <Image
                src={review?.image}
                alt="image"
                width={50}
                height={20}
                className="rounded-full"
              />
              <div>
                <h2>{review?.name}</h2>
              </div>
            </div>

            <p className="mt-2">{review?.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
