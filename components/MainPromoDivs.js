import React from "react";
import { FaCode, FaGlobe, FaShieldAlt, FaSwatchbook } from "react-icons/fa";

const MainPromoDivs = () => {
  return (
    <div className="main-promo">
      <div className="promo-div">
        <div className="promo-div-1">
          <p>
            <FaGlobe className="icon" />
            <span>IT consultancy</span>
          </p>
        </div>
      </div>
      <div className="promo-div">
        <div className="promo-div-1">
          <p>
            <FaSwatchbook className="icon" />
            <span>UI/UX strategy</span>
          </p>
        </div>
      </div>
      <div className="promo-div">
        <div className="promo-div-1">
          <p>
            <FaShieldAlt className="icon" />
            <span>Cyber security</span>
          </p>
        </div>
      </div>
      <div className="promo-div">
        <div className="promo-div-1">
          <p>
            <FaCode className="icon" />
            <span>IT Development</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPromoDivs;
