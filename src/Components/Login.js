// Import Statements
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  // Define Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Get Auth from firebase
  const auth = getAuth();

  // useNavigate for navigate to home page on successful login
  const navigate = useNavigate();

  //Get current path using location.pathname
  const location = useLocation();

  //Get Email from User
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  //Get Password from User
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  //Execute when clicked on login
  const loginHandler = (event) => {
    event.preventDefault();
    // Use firebase method to login with username and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg(
          "Logged in successfully, you will be redirected to homepage"
        );
        // Clear form
        setEmail("");
        setPassword("");
        setErrorMsg("");

        //Navigate to home if path is '/login' otherwise stay on same page
        setTimeout(() => {
          setSuccessMsg("");
          location.pathname === "/login" && navigate("/");
        }, 3000);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // Set Error Message
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
      {/* <Navbar /> */}
      <div>
        <p className="text-2xl text-center">Login</p>

        <div className="flex flex-col items-center p-20 rounded-lg bg-red-700 max-w-max mx-auto text-right">
          <form action="" className="">
            {/* Show SuccessMsg or ErrorMsg if Available */}
            {successMsg && (
              <>
                <div className="bg-green-600 bg-opacity-50 p-1 rounded-md text-center text-white">
                  {successMsg}
                </div>
              </>
            )}
            {errorMsg && (
              <>
                <div className="bg-orange-400 bg-opacity-50 p-1 rounded-md text-center text-white">
                  {errorMsg}
                </div>
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
