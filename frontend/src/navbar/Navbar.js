import React from "react";
import Logo from "../img/bank-img.png";
import './Navbar.css';

function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img
              src={Logo}
              alt="logo"
              style={{ height: 50, width: 50 }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item btn btn-secondary">
                <a className="nav-link text-white" onClick={() => window.location = "/"}>
                  Home
                </a>
              </li>
              <li className="nav-item btn btn-secondary">
                <a className="nav-link link-text text-white">
                  About Me
                </a>
              </li>
              <li className="nav-item btn btn-secondary">
                <a className="nav-link link-text text-white">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
