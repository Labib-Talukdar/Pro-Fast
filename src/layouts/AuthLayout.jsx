import React from "react";
import { Outlet } from "react-router";
import img from "../assets/authImage.png"
import ProFastLogo from "../pages/share/proFastlogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200  ">
        <div>
            <ProFastLogo></ProFastLogo>
        </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
       </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
