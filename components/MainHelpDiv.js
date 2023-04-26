import Image from "next/image";
import React from "react";
import logo from "../img/feature_img.jpg";
import MainPromoDivs from "./MainPromoDivs";

const MainHelpDiv = () => {
  return (
    <div className="main-help">
      <p className="help-p">We Help Your IT Buisness</p>
      <div className="help-div">
        <div className="help-div-1">
          <div className="help-img">
            <Image src={logo} className="" alt="Picture of the author" />
          </div>
          <div className="help-right">
            <div className="right-div-1">
              <MainPromoDivs />
            </div>
            <div className="right-div-2">
              <h1>Why Kodaze</h1>
              <p>
                We are fully functional, robust and scalable CRM and ERP
                applications which focuses on preparation and programming
                service provider we are a company. According to your business
                goals coming and achieving maximum growth the right technology
                to help you be using the possibilities “desktop”, “web” and
                mobile applications we prepare.Our main goal is you resource
                utilization with an appropriate budget for quality that
                maximizes is to develop applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHelpDiv;
