// Import Statements
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import sitterInformation from "../../EmployeeInformation";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  //Get moreData object from MoreInfo.js
  const location = useLocation();

  //save data in allinfo
  // eslint-disable-next-line
  const [allInfo, setAllInfo] = useState(location.state);

  //Filter the data for provided pincode and experience
  const sitter = sitterInformation.filter(
    (sitter) =>
      Number(allInfo.pin) >= sitter.OperatingPin1 &&
      Number(allInfo.pin) <= sitter.OperatingPin2 &&
      sitter.Experience > Number(allInfo.MinExperience)
  );

  //Create card for Map
  const CreateCard = (employee) => {
    return (
      <div>
        {/* Send props to SearchResult Card */}
        <SearchResultCard
          key={employee.ID}
          id={employee.ID}
          Name={employee.Name}
          Profile={employee.Profile}
          Address={employee.Address}
          Gender={employee.Gender}
          Experience={employee.Experience}
          Price={employee.Price}
          Phone={employee.Phone}
        />
      </div>
    );
  };

  return (
    <div>
      {sitter.length > 0 ? (
        sitter.map(CreateCard)
      ) : (
        <div className="flex items-center justify-center text-2xl">
          No Data Found
        </div>
      )}
    </div>
  );
};

export default SearchResults;
