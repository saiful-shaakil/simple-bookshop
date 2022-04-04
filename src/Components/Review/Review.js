import React from "react";
import { CardGroup } from "react-bootstrap";
import useReview from "../../Hooks/useReview";
import useReviews from "../../Hooks/useReviews";
import EachReview from "../EachReview/EachReview";

const Review = () => {
  const [allreviews, setAllReviews] = useReviews();
  return (
    <div className="mt-5 container">
      <h1 className="mt-5 mb-5">What people say about us:</h1>
      <CardGroup className="row mt-5">
        {allreviews.map((review) => (
          <EachReview key={review.id} review={review}></EachReview>
        ))}
      </CardGroup>
    </div>
  );
};

export default Review;
