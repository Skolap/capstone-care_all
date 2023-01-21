import React from "react";

const SearchResultCard = (props) => {
  console.log(`Props: ${props}`);
  return (
    <div>
      <div>
        <img src={props.Profile} alt="" />
      </div>
      <div>
        <p>Name: {props.Name}</p>
        <p>Address: {props.Address}</p>
        <p>Gender: {props.Gender}</p>
        <p>Experience: {props.Experience}</p>
        <p>Price: {props.Price}</p>
        <p>Phone: {props.Phone}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;