import Link from "next/link";
import React from "react";

const Agile = ({props, title}) => {
  return (
    <div className="agile">
      <p className="agile-p2">{title}</p>
      <div className="agile-div">
        <Link href="/" className="agile-link">
          <span>Home</span>
        </Link>
        <p>&nbsp;&nbsp;</p>
        <span>
          <p className="span-p">{">"}</p>
          <p>&nbsp;&nbsp;</p>
          {props}
        </span>
      </div>
    </div>
  );
};

export default Agile;
