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
        <form action="">
          <p>Login</p>

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
          <button onClick={loginHandler}>Login</button>
          <div>
            <span>Don't have account?</span>
            <Link to="/signup">Sigh Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;