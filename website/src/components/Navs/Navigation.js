import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ModalWallet from "../Modals/ModalWallet";
import Contact from "../../pages/Contact";
import Main from "../../pages/Main";
import Support from "../../pages/Support";
import Privacy from "../../pages/Privacy";
import RoadMap from "../../pages/RoadMap";
import PreSale from "../../pages/PreSale";
import "bootstrap";
import "../buttons/Button.css";

export default function Navigation(props) {
  return (
    <div>
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg={{ backgroundColor: "white" }}
          variant="light"
        >
          <Container>
            <Link className="navbar-brand fontTitle" to="/">
              INTRA
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link fontMedium" to="/roadmap">
                  Roadmap
                </Link>
                <Link className="nav-link fontMedium" to="/presale">
                  PreSale
                </Link>
                <Link className="nav-link fontMedium" to="/support">
                  Support
                </Link>
                <Nav.Link className="fontMedium" href="#aboutus">
                  About Us
                </Nav.Link>
                <Link className="nav-link fontMedium" to="/contact">
                  Contact
                </Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <button
                    type="button"
                    className="intraDarkBtn"
                    data-bs-toggle="modal"
                    data-bs-target={props.modalBtn}
                  >
                    conectar wallet
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/support" exact>
            <Support />
          </Route>
          <Route path="/privacy" exact>
            <Privacy />
          </Route>
          <Route path="/roadmap" exact>
            <RoadMap />
          </Route>
          <Route path="/presale" exact>
            <PreSale />
          </Route>
        </Switch>
      </Router>

      <ModalWallet modal={props.modalId} />
    </div>
  );
}
