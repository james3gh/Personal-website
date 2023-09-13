import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem";

const MainNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            style={{ border: "2px solid #ba68c8" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <NavItem navItem="Home" />
              <NavItem navItem="About" />
              <NavItem navItem="Projects" />
              <NavItem navItem="Education" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
