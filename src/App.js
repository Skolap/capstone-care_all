import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/JoinNow";
import NotFound from "./Components/NotFound";
import MoreInfo from "./Components/SearchForCareTaker/MoreInfo";
import SearchResults from "./Components/SearchForCareTaker/SearchResulls";
import EmployeeProfile from "./Components/EmployeeProfile";
import Navbar from "./Components/Navbar";
import { auth } from "./FirebaseConfigs/firebaseConfig";
import Booking from "./Components/SearchForCareTaker/Booking";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      console.log(`Is Logged In ${isAuthenticated}`);
    });
  });

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinnow" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/searchresults"
          element={isAuthenticated ? <SearchResults /> : <Login />}
        />
        <Route
          path="moreinfo"
          element={isAuthenticated ? <MoreInfo /> : <Login />}
        />
        <Route
          path="/employee/:id"
          element={isAuthenticated ? <EmployeeProfile /> : <Login />}
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
