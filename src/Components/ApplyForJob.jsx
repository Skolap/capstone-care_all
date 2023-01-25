import React, { useState } from "react";
import Login from "./Login";
const ApplyForJob = () => {
  //1 Defining Variable to save email
  const [email, setEmail] = useState(""); //email is actual value and setEmail is function that sets email value

  // 3 This Executes when anything changed in input field
  function OnChangeHandler(event) {
    // 4 used setEmail to save value in email we define in const [email, setEmail] = useState("");
    setEmail(event.target.value);
  }

  // 6 This executes on clicking on button
  function Submit(event) {
    event.preventDefault(); //Prevent browser from refreshing
    // 7 Here we print the user you can do whatever you want with email variable
    console.log(email);
  }
  return (
    <div>
      {/*0 create form to display  */}
      <form>
        {/* It Shows Input field on webpage */}
        {/* 2 OnChangeHandler function execute when user type sumeting in it */}
        <input type="text" placeholder="Email" onChange={OnChangeHandler} />

        {/* 5  Submit function executes when user click on submit*/}
        <button onClick={Submit}>Submit</button>
      </form>
    </div>
  );
};

export default ApplyForJob;
