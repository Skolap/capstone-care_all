import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../FirebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const JoinNow = () => {
  //Define Hooks
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        addDoc(collection(db, "users"), {
          username: username,
          email: email,
          phone: mobileNumber,
          password: password,
          uid: user.uid,
        })
          .then(() => {
            setSuccessMsg(
              "New user added successfully, You will now be automatically redirected to login page."
            );
            setUsername("");
            setMobileNumber("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/home");
            }, 4000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErrorMsg("Please fill all required fields");
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMsg("User already exists");
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div>
        <form action="" onSubmit={submitHandler}>
          <p>Create Account</p>

          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
            </>
          )}
          {errorMsg && (
            <>
              <div className="error-msg">{errorMsg}</div>
            </>
          )}

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

export default JoinNow;
