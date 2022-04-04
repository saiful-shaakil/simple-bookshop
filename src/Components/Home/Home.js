import React from "react";
import { CardGroup } from "react-bootstrap";
import useReview from "../../Hooks/useReview";
import EachReview from "../EachReview/EachReview";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <section className="container first-section">
        <div className=" my-5 pb-5">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-12 pt-lg-5">
              <h1>Featured Books of the Month</h1>
              <h1>April</h1>
              <p>
                The book you buy tells everything about you. Because it depends
                on a man's character that what types of books he want to
                read,how much he want to spend on a book.
              </p>
              <button type="button" className="btn btn-color">
                See More
              </button>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img width="600px" src="images/header-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 container">
        <h2>What people say about us:</h2>
        <CardGroup className="row">
          {reviews.map((review) => (
            <EachReview key={review.id} review={review}></EachReview>
          ))}
        </CardGroup>
      </section>
    </div>
  );
};

export default Home;
