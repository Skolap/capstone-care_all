import React from "react";
import Map from "./Map";

const MapContainer = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl">We are operating in following Cities</h1>
      <div className="">
        <Map />
      </div>
    </div>
  );
};

export default MapContainer;
