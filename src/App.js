// Import Statements
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
import MapContainer from "./Components/Daycare/MapContainer";
import Footer from "./Components/Footer";

function App() {
  // Define Hook fro Authentication
  const [isAuthenticated, setAuthenticated] = useState(false);

  // set Authentication true or false
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  });

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
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
          <Route
            path="/booking"
            element={isAuthenticated ? <Booking /> : <Login />}
          />
          <Route
            path="/map"
            element={<MapContainer />}
            // element={isAuthenticated ? <MapContainer /> : <Login />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
