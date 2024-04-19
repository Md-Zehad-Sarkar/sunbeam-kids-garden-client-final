"use client";
import StarRatings from "react-star-ratings";

const Ratings = ({ rating }: { rating: any }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starDimension="25px"
        starSpacing="5px"
        starRatedColor="blue"
      />
    </div>
  );
};

export default Ratings;
