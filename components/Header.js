import React from "react";
import { GoLocation } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { HiClock } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="header-wrap-1">
        <div className="col-4 header-wrap-first">
          {/* <GoLocation /> */}
          <IoLocationSharp className="header-icon" />
          71-75, Shelton Street, London, United Kingdom
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>|<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <IoMdMail className="header-icon" />
          info@kodaze.com
        </div>
        <div className="col-4 header-wrap-second">
          <HiClock className="header-icon" />
          Office Hour : 08:00am - 6:00pm<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>|
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <BsFillTelephoneFill className="header-icon" /> +44 7898478933
        </div>
      </div>
    </div>
  );
};

export default Header;
