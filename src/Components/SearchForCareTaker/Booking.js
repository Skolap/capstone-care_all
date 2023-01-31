import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const link = `/employee/${location.state.id}`;

  const [serviceHours, setServiceHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [toggleView, setToggleView] = useState(true);

  const serviceHoursHandler = (event) => {
    setServiceHours(event.target.value);
  };
  //   console.log(`Booking:${location.state.id}`);
  const submitHandler = (event) => {
    setPrice(serviceHours * location.state.price);
    setToggleView(!toggleView);
    event.preventDefault();
  };

  const homeHandler = () => {
    navigate("/");
  };
  return (
    <div className="bg-[#00364E] flex flex-col mx-auto p-5 w-2/4 text-white ">
      {toggleView ? (
        <form onSubmit={submitHandler} className="my-auto">
          <div className="flex flex-col items-center justify-center">
            <label className="w-max text-2xl p-2 ">
              Enter Service Required in Hours
            </label>
            <input
              className="text-black p-2 m-2"
              onChange={serviceHoursHandler}
              type="number"
            />
            <button
              className="py-2 px-5 bg-slate-50 rounded-lg text-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col">
          <div className="bg-[#F05000] p-2 m-2 rounded-lg">
            <h1 className="text-2xl font-bold">Your Booking Successful</h1>
            <p className="text-gray-200">
              <Link to={link}>
                <strong>{location.state.name}</strong>
              </Link>{" "}
              is on the way
            </p>
          </div>
          <div className="p-2 m-2">
            <p>Work Duration: {serviceHours}hrs</p>
            <p>Price/hr: ₹{location.state.price}</p>
            <p>Total Cost: ₹{price}</p>
          </div>
          <div className="text-right p-2 m-2">
            <button
              className="py-2 px-5 bg-slate-50 rounded-lg text-black"
              onClick={homeHandler}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
