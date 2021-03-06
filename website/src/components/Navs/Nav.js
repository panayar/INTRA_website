import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../buttons/Button.css";

import Contact from "../../pages/Contact";
import Main from "../../pages/Main";
import Support from "../../pages/Support";
import Privacy from "../../pages/Privacy";
import ModalWallet from "../Modals/ModalWallet";

export default function Nav(props) {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link className="navbar-brand fontTitle" to="/INTRA_website/">
              INTRA
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link fontMedium" to="/">
                    Roadmap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fontMedium" to="/">
                    PreSale
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fontMedium" to="/support">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fontMedium" to="/">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fontMedium" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="intraDarkBtn"
                data-bs-toggle="modal"
                data-bs-target={props.modalBtn}
              >
                conectar wallet
              </button>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/INTRA_website/" exact>
            <Main />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>
      </Router>

      <ModalWallet modal={props.modalId}  />
    </div>
  );
}
