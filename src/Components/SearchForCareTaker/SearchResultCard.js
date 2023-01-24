import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SearchResultCard = (props) => {
  console.log(`Props: ${props}`);
  const link = `/employee/${props.id}`;
  return (
    <div>
      <Link to={link}>
        <div className="bg-[#00364E] text-white m-5 flex max-w-6xl mx-auto rounded-xl justify-center items-center">
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
              <p>Gender: {props.Gender}</p>
              <p>Experience: {props.Experience} Years</p>
              <p>Price: ₹{props.Price}</p>
            </div>
          </div>
          <div className="ml-[600px]">
            <button className="py-2 px-5 bg-slate-50 rounded-lg text-black">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultCard;
