import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div className="mt-40 lg:mt-10">
          <Outlet />
        </div>

        <div class=" fixed hidden lg:flex bottom-48 left-20 rounded w-14 h-48 bg-[#2c3c3c] text-white  items-center justify-center">
          <div className="">
            {" "}
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
