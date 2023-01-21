import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/JoinNow";
import NotFound from "./Components/NotFound";
import MoreInfo from "./Components/SearchForCareTaker/MoreInfo";
import SearchResults from "./Components/SearchForCareTaker/SearchResulls";
// import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/joinnow" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="moreinfo" element={<MoreInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
