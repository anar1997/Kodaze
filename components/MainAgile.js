import Link from "next/link";
import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";

const MainAgile = () => {
  return (
    <div className="main-agile">
      <p className="main-agile-p1">
        <span>Agile in mind, spirit, and speed</span>
      </p>
      <p className="main-agile-p2">
        Enginnering the next best
        <br />
        thing for the digital world
      </p>
      <Link href='' className="main-agile-link">
        <span>Meet with us</span>
        <BsArrowRightSquare className="arrow-right"/>
      </Link>
    </div>
  );
};

export default MainAgile;
