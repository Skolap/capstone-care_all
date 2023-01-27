import React, { useState } from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../FirebaseConfigs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

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
              navigate("/login");
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
      {/* <Navbar /> */}
      <div className="w-max mx-auto">
        <p className="text-2xl text-center">Create Account</p>
        <div className="flex flex-col items-center p-20 bg-red-700 max-w-max mx-auto text-right rounded-lg">
          <form action="" onSubmit={submitHandler}>
            {successMsg && (
              <>
                <div className="bg-green-600 bg-opacity-50 p-1 text-center rounded-md text-white">
                  {successMsg}
                </div>
              </>
            )}
            {errorMsg && (
              <>
                <div className="bg-orange-400 bg-opacity-50 p-1 text-center rounded-md text-white">
                  {errorMsg}
                </div>
              </>
            )}
            <div className="flex flex-col items-center">
              <div className="p-3">
                <div className="text-right p-1">
                  <label className="p-4">Your Name</label>
                  <input
                    className="p-1 outline outline-1"
                    onChange={nameChangeHandler}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="text-right p-1">
                  <label className="p-4">Mobile Number</label>
                  <input
                    className="p-1 outline outline-1"
                    type="tel"
                    onChange={mobileChangeHandler}
                    placeholder="Mobile Number"
                  />
                </div>

                <div className="text-right p-1">
                  <label className="p-4">Email</label>
                  <input
                    className="p-1 outline outline-1"
                    type="email"
                    onChange={emailChangeHandler}
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="text-right p-1">
                  <label className="p-4">Password</label>
                  <input
                    className="p-1 outline outline-1"
                    type="tel"
                    onChange={passwordChangeHandler}
                    placeholder="Choose Your Password"
                  />
                </div>
              </div>
              <button
                className="py-2 px-5 bg-slate-50 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="text-white">
              <span>Alredy Have Account? </span>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default JoinNow;
