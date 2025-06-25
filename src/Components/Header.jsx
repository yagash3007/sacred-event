import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Search from "../Components/Search";

const Header = () => {
  return (
    <header className="main_header_area position-absolute w-100 site-header">
      {/* Top bar with social and contact info */}
      <div className="header-content text-white">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  <ul className="m-0 p-0 d-flex gap-2">
                    {[
                      "facebook",
                      "twitter",
                      "google",
                      "instagram",
                      "youtube-play",
                    ].map((icon, i) => (
                      <li key={i} className="d-inline">
                        <a href="#">
                          <i
                            className={`fa fa-${icon} border-social rounded-circle text-center`}
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-phone pe-1"></i>
                      <small>+33 877 554 332</small>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <small>Sacredheart@website.com</small>
                    </li>
                    <li className="px-2 d-inline">
                      <i className="fa fa-clock-o pe-1"></i>
                      <small>Mon - Fri: 9:00 - 18:30</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      {/* <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              <div className="col-lg-2 col-md-6">
                <div className="navbar-brand m-0">
                  <img
                    src="https://shctpt.edu/assets/img/logo/logo.png"
                    alt="Logo"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <Navbar />
              </div>

              <div className="col-lg-3">
                <div
                  className="menu-search text-end d-flex justify-content-end gap-2"
                  style={{ marginTop: "-5px" }}
                >
                  <Link
                    to="/"
                    className="btn "
                    // style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}
                  >
                    Book your Pass{" "}
                    <i className="fa fa-long-arrow-right ms-4"></i>
                  </Link>
                  <Link
                    to="/"
                    className="btn "
                    // style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}
                  >
                    Secure your Stall{" "}
                    <i className="fa fa-long-arrow-right ms-4"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div> */}
      <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              <div className="col-lg-2 col-md-6">
                <div className="navbar-brand m-0">
                  <img
                    src="https://shctpt.edu/assets/img/logo/logo.png"
                    alt="Logo"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-6">
                <Navbar />
              </div>

              <div className="col-lg-3">
                <span className="d-flex justify-content-end gap-2">
                  <div className="menu-search" style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                    <Link to="/Booknow" className="btn btn3">
                      Book Your Pass <i className=""></i>
                    </Link>
                  </div>
                  <div className="menu-search" style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }} >
                    <Link to="/Booknow" className="btn btn3">
                      Secure Your Still <i className=" "></i>
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div>

      {/* Search Overlay */}
    </header>
  );
};

export default Header;
