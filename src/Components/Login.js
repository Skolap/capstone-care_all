import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg(
          "Logged in successfully, you will be redirected to homepage"
        );

        // console.log(loggeduser.email)
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/home");
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErrorMsg("Please fill all required fields");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMsg("Email not found");
        }
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorMsg("Wrong Password");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <p className="text-2xl text-center">Login</p>

        <div className="flex flex-col items-center p-20 bg-red-700 max-w-max mx-auto text-right">
          <form action="" className="">
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
            <div>
              <div className="m-2">
                <label className="m-2 p-2">Email</label>
                <input
                  className="p-1"
                  type="email"
                  onChange={emailChangeHandler}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="m-2">
                <label className="m-2 p-2">Password</label>
                <input
                  className="p-1"
                  type="password"
                  onChange={passwordChangeHandler}
                  placeholder="Choose Your Password"
                />
              </div>
            </div>
            <div className="text-center mt-9">
              <button
                className="py-2 px-5 bg-slate-50 rounded-lg"
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
            <div className="text-left text-white p-3 mt-5">
              <span>Don't have account? </span>
              <Link to="/joinnow">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
