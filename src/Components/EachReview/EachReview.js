import React from "react";
import { Card } from "react-bootstrap";
import "./EachRevies.css";

const EachReview = ({ review }) => {
  return (
    <div>
      <Card className="each-card">
        <Card.Img
          className="rounded-image mt-2"
          variant="top"
          src={review.image}
        />
        <Card.Body>
          <Card.Title>{review.name}</Card.Title>
          <Card.Text>{review.review}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachReview;
