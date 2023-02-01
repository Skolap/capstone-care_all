//Import Statements
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResultCard = (props) => {
  //Url to use in Link
  const link = `/employee/${props.id}`;

  //To redirect page to "/booking"
  const navigate = useNavigate();

  //Book Now Button Handler; onClick redirect to "/booking" with "id, name and price"
  const bookNowHandler = (event) => {
    event.preventDefault();
    navigate("/booking", {
      state: { id: props.id, name: props.Name, price: props.Price },
    });
  };
  return (
    <div>
      <div className="bg-[#00364E] text-white m-5 flex max-w-2xl mx-auto rounded-xl justify-between items-center">
        <Link to={link} className="p-2">
          <div className="w-32 h-32">
            <img
              className="w-32 h-32 rounded-full"
              src={props.Profile}
              alt={props.Name}
            />
          </div>
        </Link>
        <Link to={link} className="w-full p-2">
          <div className="">
            <p className="text-xl font-bold">{props.Name}</p>
            <div className="text-gray-300">
              <p>Gender: {props.Gender}</p>
              <p>Experience: {props.Experience} Years</p>
              <p>Price: ₹{props.Price}</p>
            </div>
          </div>
        </Link>
        <div className="p-2">
          <button
            id={link}
            className="py-2 px-5 bg-slate-50 rounded-lg text-black w-max"
            onClick={bookNowHandler}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
