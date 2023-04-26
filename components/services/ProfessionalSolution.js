import React from "react";
import { FaCode } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiRulerFill } from "react-icons/ri";

const ProfessionalSolution = () => {
  return (
    <div className="pro-sol">
      <div className="pro-head">
        <p>Our Professional Solution</p>
      </div>
      <div className="cards">
        <div className="card">
          <button className="card-button">
            <HiOutlinePencilAlt className="card-icon" />
          </button>
          <span className="card-span">Application Modernization</span>
          <p>
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div className="card">
          <button className="card-button">
            <HiOutlinePencilAlt className="card-icon" />
          </button>
          <span className="card-span">Application Modernization</span>
          <p>
            Make your application future ready by improving the tech stack,
            code, and cloud infrastructure.
          </p>
        </div>
        <div className="card">
          <button className="card-button">
            <FaCode className="card-icon" />
          </button>
          <span className="card-span">Complex Development</span>
          <p>
            Kodaze was built to handle complex core engineering tasks in a
            fast-paced growth environment.
          </p>
        </div>
        <div className="card">
          <button className="card-button">
            <RiRulerFill className="card-icon" />
          </button>
          <span className="card-span">Strategy and Planning</span>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSolution;
