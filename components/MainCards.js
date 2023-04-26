import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { RiRulerFill } from "react-icons/ri";

const MainCards = () => {
  return (
    <div className="main-cards">
      <div className="cards">
        <div className="card">
          <HiPencilAlt className="card-icon"/>
          <span className="card-span">Product enginnering</span>
          <p className="card-p">
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div className="card">
          <HiPencilAlt className="card-icon"/>
          <span className="card-span">Application Modernization</span>
          <p className="card-p">
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div className="card">
          <BiCodeAlt className="card-icon"/>
          <span className="card-span">Complex Development</span>
          <p className="card-p">
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div className="card">
          <RiRulerFill className="card-icon"/>
          <span className="card-span">Strategy and Planning</span>
          <p className="card-p">
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
