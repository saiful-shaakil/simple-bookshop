import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-5 text-justify">
      <h5>Question 1:- What is Context API?</h5> <br />
      <p>
        <span>Ans: </span> The Context API is a React structure that enables us
        to exchange unique details and assists in solving prop-drilling from all
        levels of our application. It is the alternative to "prop drilling" or
        moving props from grandparent to child to parent, and so on. We can
        easily pass any data(object,array) without prop-drilling to a son from
        grandfather/parents and it is called Context API.
      </p>
      <h5>Question 2:- What is semantic tag?</h5> <br />
      <p>
        <span>Ans: </span> Semantic HTML tags provide information about the
        contents of those tags that goes beyond just how they look on a page.
        Text that is enclosed in the tag is immediately recognized by the
        browser as some type of coding language. Instead of trying to render
        that code, the browser understands that you are using that text as an
        example of the code for the purposes of an article or online tutorial.
      </p>
    </div>
  );
};

export default Blogs;
