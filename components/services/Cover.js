import Image from "next/image";
import React from "react";
import logo from "../../img/page-banner.jpg";
import Agile from "./Agile";

const Cover = ({ props1, title1, image1 }) => {
  return (
    <div className="cover">
      <div className="cover-img">
        <Image src={image1} className="img" alt="Picture of the author" />
      </div>
      <div className="cov-div">
        <div className="cov-div-1">
          <Agile props={props1} title={title1} />
        </div>
      </div>
    </div>
  );
};

export default Cover;
