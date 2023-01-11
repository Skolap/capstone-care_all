import React, { useState } from "react";

function CreateCustomerAccount() {
  // Define states for storing user input data
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Define Event Handler for onChange Event
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevent browser from refreshing /BrowserDefault

    //Save data in object to use later
    const userData = {
      name: userName,
      email: email,
      password: password,
    };
    console.log(userData);
  };
  return (
    //HTML form to get input from user
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Name</label>{" "}
          <input
            type="text"
            required="true"
            value={userName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label>email</label>{" "}
          <input
            type="email"
            required="true"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div>
          <label>password</label>{" "}
          <input
            type="password"
            required="true"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateCustomerAccount;
