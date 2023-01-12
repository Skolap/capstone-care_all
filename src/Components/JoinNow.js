import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../FirebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //Define Hooks
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const mobileChangeHandler = (event) => {
    setMobileNumber(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        addDoc(collection(db, "users"), {
          username: username,
          email: email,
          phone: mobileNumber,
          password: password,
          uid: user.uid,
        })
          .then(console.log("successful"))
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };
  return (
    <div>
      <Navbar />
      <div>
        <form action="" onSubmit={submitHandler}>
          <p>Create Account</p>
          <label htmlFor="">Your Name </label>
          <input
            onChange={nameChangeHandler}
            type="text"
            placeholder="Enter Your Name"
          />
          <label htmlFor="">Mobile Number</label>
          <input
            type="tel"
            onChange={mobileChangeHandler}
            placeholder="Mobile Number"
          />

          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={emailChangeHandler}
            placeholder="Enter Your Email"
          />

          <label htmlFor="">Password</label>
          <input
            type="tel"
            onChange={passwordChangeHandler}
            placeholder="Choose Your Password"
          />
          <button type="submit">Submit</button>
          <div>
            <span>Alredy Have Account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
