import { useEffect, useState } from "react";

const useReviews = () => {
  const [allreviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return [allreviews, setAllReviews];
};

export default useReviews;
