import React from "react";
import Link from "next/link";
import logo from "../img/kodaze-2.png";
import { IoLogoFacebook, IoLogoGoogle, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BsArrowUpSquare } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="container footer-wrap-1">
          <div className="footer-right-side">
            <div className="col-5 footer-wrap-first">
              <div>
              <Image src={logo} className="kodaze-logo"/>
              </div>
              {/* <a className="footer-wrap-first-logo">
                <img
                  src="https://kodaze.com/wp-content/uploads/2022/07/logo-kodaze-1536x371.png"
                  alt="kodaze footer logo"
                />
              </a> */}
              <p className="footer-wrap-first-desc">
                We are the best world Information Technology Company. Providing
                the highest quality in hardware, Software & Network solutions.
                <br />
                Talk To Our Support
                <br />
                +1 002-123-4567
              </p>
            </div>
            <div className="col-2 footer-wrap-refer">
              <h3 className="footer-head">Quick links</h3>
              <ul>
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact">
                    <a>Contact us</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/about">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services">
                    <a>Consultation</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 footer-wrap-contact">
              <h3 className="footer-head">Follow us on</h3>
              <p className="cta">
                Follow us today for hints, tips
                and the latest product news
              </p>
              <p>
                <IoLogoTwitter className="footer-social-logo"/>
                <IoLogoLinkedin className="footer-social-logo" />
                <IoLogoFacebook className="footer-social-logo"/>
                <IoLogoGoogle className="footer-social-logo"/>
              </p>
            </div>
          </div>
          <hr className="footer-hr"/>
          <div className="footer-bottom-side">
            <p className="footer-bottom-side-p">
              Copyright © 2023 all rights powered by Kodaze
            </p>
            <BsArrowUpSquare onClick={()=>window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="arrow-up"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
