import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Icons/Final_Care_All.svg";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-90 flex align-middle justify-between px-4 mb-3 sticky top-0">
      <div className="w-36">
        <Link to="/" className="flex align-middle">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-end gap-4 align-middle">
        <Link
          to="/"
          className="flex align-middle px-2 hover:bg-[#f63b3b] hover:text-white"
        >
          <button>Home</button>
        </Link>
        <Link
          to="/joinnow"
          className="flex align-middle px-2 hover:bg-[#f63b3b] hover:text-white"
        >
          <button>Join Now</button>
        </Link>
        <Link
          to="/login"
          className="flex align-middle px-2 hover:bg-[#f63b3b] hover:text-white"
        >
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
