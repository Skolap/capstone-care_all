import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SearchResultCard = (props) => {
  console.log(`Props: ${props}`);
  const link = `/employee/${props.id}`;
  return (
    <div>
      <Link to={link}>
        <div className="bg-[#00364E] text-white m-2 flex max-w-6xl mx-auto rounded-xl">
          <div className="m-5">
            <img
              className="w-32 h-32 rounded-full"
              src={props.Profile}
              alt=""
            />
          </div>
          <div className="p-2">
            <p className="text-xl font-bold">{props.Name}</p>
            <div className="text-gray-300">
              <p>{props.Address}</p>
              <p>Gender: {props.Gender}</p>
              <p>Experience: {props.Experience} Years</p>
              <p>Price: ₹{props.Price}</p>
              <p>Phone: {props.Phone}</p>
            </div>
          </div>
          <button>Book Now</button>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultCard;
