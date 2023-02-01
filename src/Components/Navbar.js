// Import Statements
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Icons/Final_Care_All.svg";
import { auth } from "../FirebaseConfigs/firebaseConfig";

const Navbar = (props) => {
  // SignOut Button
  const signOutUser = () => {
    auth.signOut();
  };
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
        {/* Show if not LoggedIn */}
        {!props.isAuthenticated ? (
          <Link
            to="/joinnow"
            className="flex align-middle px-2 hover:bg-[#f63b3b] hover:text-white"
          >
            <button>Join Now</button>
          </Link>
        ) : null}
        {/* Show If LoggedIn */}
        {props.isAuthenticated ? (
          <button
            onClick={signOutUser}
            className="px-2 hover:bg-[#f63b3b] hover:text-white"
          >
            SignOut
          </button>
        ) : (
          <Link
            to="/login"
            className="flex align-middle px-2 hover:bg-[#f63b3b] hover:text-white"
          >
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
