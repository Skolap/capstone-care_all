//Import statements
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MoreInfo = (props) => {
  //defined props to store Pin and Min Experience
  const [enteredPin, setEnteredPin] = useState(null);
  const [EnteredMinExperience, setEnteredMinExperience] = useState(null);

  //useNavigate to navigate to searchresults on submit
  const navigate = useNavigate();

  //get pincode from user
  const pinHandler = (event) => {
    setEnteredPin(event.target.value);
  };
  //get experience from user
  const minExperinceHandler = (event) => {
    setEnteredMinExperience(event.target.value);
  };

  //On submit navigate to "/searchresults" and send moreData
  const submitHandler = (event) => {
    event.preventDefault();
    const moreData = { pin: enteredPin, MinExperience: EnteredMinExperience };
    // console.log(`From MoreInfo${moreData}`);

    // props.onSendData(moreData);
    navigate("/searchresults", { state: moreData });
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">We need More Info</h1>
        <div className="w-1/4 bg-red-700 rounded-lg">
          <form onSubmit={submitHandler} className="">
            <div className="flex flex-col p-4 text-black">
              <div className="flex flex-col p-4">
                <label className="text-center p-2">What is your pin</label>
                <input
                  className="caret-red-500"
                  onChange={pinHandler}
                  type="number"
                  max={855117}
                  min={110001}
                  required
                />
              </div>
              <div className="flex flex-col p-4">
                <label className="text-center p-2 ">Required Experience</label>
                <input onChange={minExperinceHandler} type="number" required />
              </div>
              <div className="text-center text-gray-300">
                <button
                  className="py-2 px-5 bg-slate-50 rounded-lg text-black"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
