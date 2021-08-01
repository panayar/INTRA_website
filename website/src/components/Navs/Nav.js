import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../buttons/Button.css";
import React from "react";
import Button from "../buttons/Button";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand fontTitle">INTRA</a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link fontMedium">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontMedium">PreSale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontMedium">DeFi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontMedium">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontMedium">Contact</a>
              </li>
            </ul>
           
              <Button message="conectar wallet" style="intraDarkBtn" />
           
          </div>
        </div>
      </nav>
    </div>
  );
}
