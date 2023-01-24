import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gray-800 text-gray-300 mt-4 w-full absolute">
        <p className="p-2 text-center">
          {new Date().getFullYear()} &copy; Copyright: CareAll.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
