import React, { useState } from "react";
import { db } from "../../FirebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ApplyForJob = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [areaCode, setAreaCode] = useState("");
  const [price, setPrice] = useState(0);

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //   Set Name
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  //   Set Address
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  //Set gender
  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };
  //Set Area
  const areaChangeHandler = (e) => {
    setAreaCode(e.target.value);
  };
  //   Set Phone
  const phoneHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  //   Set Price
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  //Execute on submit
  const onSubmit = (e) => {
    e.preventDefault();

    // Add User to 'users' collection in database
    // Add User to 'users' collection in database
    addDoc(collection(db, "employees"), {
      name: name,
      address: address,
      phone: phoneNumber,
      gender: gender,
      areacode: areaCode,
      price: price,
    })
      .then(() => {
        setSuccessMsg("New user added successfully");
        // Clear Form
        setName("");
        setAddress("");
        setPhoneNumber("");
        setGender("");
        setAreaCode("");
        setPrice("");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center">
      {successMsg && (
        <>
          <div>{successMsg}</div>
        </>
      )}
      {errorMsg && (
        <>
          <div>{errorMsg}</div>
        </>
      )}
      <form onSubmit={onSubmit} className="mx-auto">
        {/* Get Name */}
        <div>
          <label>Full Name</label>
          <input
            onChange={nameHandler}
            type="text"
            placeholder="Enter Your Name Here"
          />
        </div>
        {/* Get Gender */}
        <div>
          <label>Gender</label>
          <select value={gender} onChange={genderChangeHandler}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* Get Address */}
        <div>
          <label>Address</label>
          <input
            onChange={addressHandler}
            type="text"
            placeholder="Enter Your Address Here"
          />
        </div>
        {/* Get Phone Number */}
        <div>
          <label>Phone Number</label>
          <input
            onChange={phoneHandler}
            type="number"
            placeholder="Enter Your Phone Here"
          />
        </div>
        {/* Get Area Code */}
        <div>
          <label>Operation Area</label>
          <select value={areaCode} onChange={areaChangeHandler}>
            <option value="">-------SELECT YOUR AREA-------</option>
            <option value="100000 - 20000">100000 - 20000</option>
            <option value="200000 - 300000">200000 - 300000</option>
            <option value="300000 - 400000">300000 - 400000</option>
            <option value="400000 - 500000">400000 - 500000</option>
            <option value="500000 - 600000">500000 - 600000</option>
          </select>
        </div>
        {/* Get Price */}
        <div>
          <label>Your Service Price</label>
          <input
            onChange={priceHandler}
            type="number"
            placeholder="Enter Your Price Here"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForJob;