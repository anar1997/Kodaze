import Link from "next/link";
import React from "react";
import { FooterLogo } from "../svg";
import logo from "../img/kodaze.png";
import Image from "next/image";

const LinksArea = () => {
  return (
    <div className="container links-area-wrap">
      <div className="wrap">
        <Link href="/" legacyBehavior>
          <a>
            <Image className="kodaze-img" src={logo} alt="kodaze-logo" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/services" legacyBehavior>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinksArea;
