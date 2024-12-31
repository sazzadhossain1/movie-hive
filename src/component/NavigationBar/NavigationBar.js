import React from "react";
import "./NavigationBar.css";
// import facebookLogo from "../../accets/MediaLogo/facebook.png";
// import instagramLogo from "../../accets/MediaLogo/instagram.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav_parent_div">
      <header>
        <div className="container">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <h3 className="logo">
              Movie <span>Hive</span>
            </h3>
          </div>

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link" style={{ "--i": ".6s" }}>
                  <Link href="#">Home</Link>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">
                    About Us &nbsp;
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link href="#">Mission and Vision</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link href="#">Team</Link>
                      </li>

                      <li className="dropdown-link">
                        <Link href="#">Factory</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": "1.1s" }}>
                  <a href="#">
                    Products &nbsp;
                    {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link to="#">Men</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Women</Link>
                      </li>

                      <li className="dropdown-link">
                        <Link to="#">Kids</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Sports</Link>
                      </li>
                      <li className="dropdown-link">
                        <Link to="#">Specialty Socks</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">News & Events &nbsp;</Link>
                </li>
                <li className="nav-link" style={{ "--i": ".85s" }}>
                  <Link href="#">Contact Us &nbsp;</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
