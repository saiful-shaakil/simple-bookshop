import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="mt-2 p-3">
      <Link className="heading me-5" to="/">
        HOME
      </Link>
      <Link className="heading me-5" to="/review">
        REVIEW
      </Link>
      <Link className="heading me-5" to="/dashboard">
        DASHBOARD
      </Link>
      <Link className="heading me-5" to="/blogs">
        BLOGS
      </Link>
      <Link className="heading me-5" to="/about">
        ABOUT
      </Link>
    </nav>
  );
};

export default Header;
