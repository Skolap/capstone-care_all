import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import sitterInformation from "../../EmployeeInformation";
import sitterInformation from "../EmployeeInformation";
// import Navbar from "../Navbar";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  //Get data from MoreInfo.js
  const location = useLocation();
  //save data in allinfo
  const [allInfo, setAllInfo] = useState(location.state);
  //Filter the data for conditions
  const x = sitterInformation.filter(
    (sitter) =>
      Number(allInfo.pin) >= sitter.OperatingPin1 &&
      Number(allInfo.pin) <= sitter.OperatingPin2 &&
      sitter.Experience > Number(allInfo.MinExperience)
  );

  console.log(`XLength: ${x.length}`);

  const CreateCard = (x2) => {
    return (
      <SearchResultCard
        key={x2.ID}
        id={x2.ID}
        Name={x2.Name}
        Profile={x2.Profile}
        Address={x2.Address}
        Gender={x2.Gender}
        Experience={x2.Experience}
        Price={x2.Price}
        Phone={x2.Phone}
      />
    );
  };

  return (
    <>
      {/* <Navbar /> */}
      {x.length > 0 ? x.map(CreateCard) : <div>No Data Found</div>}
      {/* {x.map(CreateCard)} */}
    </>
  );
};

export default SearchResults;
