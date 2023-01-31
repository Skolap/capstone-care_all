import React from "react";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Banner from "../Assets/Images/banner.png";
import bg_check from "../Assets/Icons/bg_check.svg";
import id_verif from "../Assets/Icons/id_verif.svg";
import fraud_prev from "../Assets/Icons/fraud_prev.svg";
import safty_screen from "../Assets/Icons/safty_screen.svg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col">
        <div
          className=" h-screen bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="p-3 h-screen mt-20">
            <div className="w-2/5 bg-opacity-10 bg-[#f63b3b]">
              <h1 className="text-6xl p-2">We Treat You Like Family</h1>
              <p className="text-xl p-2">
                Find the right sitter or nanny for your family
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col align-middle justify-center p-2 border-b-2">
          <div className="text-center bg-opacity-10 bg-[#f63b3b]">
            <h1 className="text-center text-2xl p-4">Check Out Our Services</h1>
          </div>
          <div className="flex justify-around px-[100px] text-center">
            <Link to="/moreinfo" className="group p-6 m-2 bg-white">
              <img
                className="w-24 h-24 group-hover:scale-110 ease-in duration-[110ms]"
                src={require("../Assets/Icons/BabyCare.png")}
                alt="Baby Care"
              />
              <p className="text-center p-1 border-b-2 border-white group-hover:border-b-2 group-hover:border-[#f63b3b]">
                Child Care
              </p>
            </Link>
            <Link to="/moreinfo" className="group p-6 m-2  bg-white">
              <img
                className="w-24 h-24 group-hover:scale-110 ease-in duration-[110ms]"
                src={require("../Assets/Icons/AdultCare.png")}
                alt="Adult Care"
              />
              <p className="text-center p-1 border-b-2 border-white group-hover:border-b-2 group-hover:border-[#f63b3b]">
                Adult Care
              </p>
            </Link>
            <Link to="/moreinfo" className="group p-6 m-2  bg-white">
              <img
                className="w-24 h-24 group-hover:scale-110 ease-in duration-[110ms]"
                src={require("../Assets/Icons/PetCare.png")}
                alt="Pet Care"
              />
              <p className="text-center p-1 border-b-2 border-white group-hover:border-b-2 group-hover:border-[#f63b3b]">
                Pet Care
              </p>
            </Link>
            <Link to="/map" className="group p-6 m-2  bg-white">
              <img
                className="w-24 h-24 group-hover:scale-110 ease-in duration-[110ms]"
                src={require("../Assets/Icons/Daycare.png")}
                alt="DayCare"
              />
              <p className="text-center p-1 border-b-2 border-white group-hover:border-b-2 group-hover:border-[#f63b3b]">
                Daycare
              </p>
            </Link>
          </div>
        </div>
        <div className="px-[10rem] py-2">
          <div className="">
            <div className="py-2">
              <h1 className="text-2xl">Focused on safety</h1>
              <p className="text-lg">
                Our dedicated team is working hard behind the scenes every day.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    className="mx-auto"
                    src={bg_check}
                    alt="Background Verification"
                  />
                </div>
                <p>Run background checks</p>
              </div>
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    className="mx-auto"
                    src={id_verif}
                    alt="Identity verification"
                  />
                </div>
                <p>Identity verification</p>
              </div>
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    className="mx-auto"
                    src={fraud_prev}
                    alt="Fraud prevention"
                  />
                </div>
                <p>Fraud prevention</p>
              </div>
              <div className="flex flex-col">
                <div className="w-full">
                  <img
                    className="mx-auto"
                    src={safty_screen}
                    alt="Safety screenings"
                  />
                </div>
                <p>Safety screenings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
