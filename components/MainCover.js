import React from "react";
import logo from "../img/homecover.png";
import MainAgile from "./MainAgile";
import MainCards from "./MainCards";
import Image from "next/image";

const MainCover = () => {
  return (
    <div className="main-cover">
      <div className="cover-img">
        <Image src={logo} className="main-img" alt="Picture of the author" />
      </div>
      <div className="cover-div">
        <div className="cover-div-1">
        <MainAgile />
        <MainCards />
        </div>
      </div>
    </div>
  );
};

export default MainCover;
