import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/joinnow">
        <button>Join Now</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
