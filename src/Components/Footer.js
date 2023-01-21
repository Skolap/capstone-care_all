import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-gray-300 mt-4">
        <p className="p-2 text-center">
          {new Date().getFullYear()} &copy; Copyright: CareAll.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
