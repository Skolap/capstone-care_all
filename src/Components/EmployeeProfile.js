import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import sitterInformation from "./EmployeeInformation";
// import Navbar from "./Navbar";

const EmployeeProfile = () => {
  //Get id from url
  const params = useParams();

  //Find object that matches id
  const employee = sitterInformation.find((sitter) => sitter.ID == params.id);

  return (
    <div className="flex flex-col gap-1">
      {/* <Navbar /> */}
      <div className="w-3/5 mx-auto bg-[#00364E] rounded-xl">
        <div className="flex p-4 items-end">
          <div className="">
            <img
              className="w-64 h-64 rounded-3xl p-2"
              src={employee.Profile}
              alt={employee.Profile}
            />
          </div>
          <div className="p-2 pb-10">
            <h1 className="text-6xl text-white">{employee.Name}</h1>
            <div className="flex gap-2 text-gray-400">
              <div className="text-center m-3">
                <p className="font-bold">{employee.Experience}</p>
                <p>Years Experience</p>
              </div>
              <div className="text-center m-3">
                <p className="font-bold">₹{employee.Price}</p>
                <p>Rate Per Hour</p>
              </div>
              <div className="text-center m-3">
                <p className="font-bold">{employee.Gender}</p>
                <p>Gender</p>
              </div>
            </div>

            {/* <p className="">Address: {employee.Address}</p> */}
          </div>
        </div>
      </div>
      <div className="w-3/5 mx-auto bg-[#00364E] rounded-xl p-4 text-gray-300">
        <p className="text-white font-bold text-xl">
          {employee.Name}'s Information
        </p>
        <div className="flex gap-2">
          <p className="font-bold">Address: </p>
          <p>{employee.Address}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Phone: </p>
          <p>{employee.Phone}</p>
        </div>
        <div>
          <p className="font-bold">Bio:</p>
          <p>{employee.Summery}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
