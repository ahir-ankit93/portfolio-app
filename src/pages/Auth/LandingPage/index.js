import React, { useEffect, useState } from "react";
import "./landingPage.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../../Images/logo-square.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import About from "../../Auth/About";
import Projects from "../../Auth/Projects";
import Skills from "../../Auth/Skills";
import Contacts from "../../Auth/Contacts";
import Footer from "../../../components/AuthFooter";
const LandingPage = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.pageYOffset > 200);
    });
  }, []);
  return (
    <React.Fragment>
      <div className={`header-section ${sticky ? "sticky" : ""}`}>
        <Navbar
          bg="transparent"
          variant="light"
          expand="lg"
          className="d-none d-md-flex"
        >
          <Navbar.Brand>
            <Link to="/">
              <img alt="logo" className="brand_logo " src={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <a href="about">ABOUT</a>
              <a href="skills">SKILLS</a>
              <a href="projects">PROJECTS</a>
              <a href="contacts">CONTACTS</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar
          bg="light"
          expand="lg"
          className="header d-flex d-md-none w-100"
        >
          <Navbar.Brand>
            <Link to="/">
              <img alt="logo" className="brand_logo " src={logo} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <a href="about">ABOUT</a>
              <a href="skills">SKILLS</a>
              <a href="projects">PROJECTS</a>
              <a href="contacts">CONTACTS</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="position-relative slider">
        <div className="full-screen">
          <div className="background"></div>
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="header-text-section text-center">
              <div className="header-title">
                <h1>Ankit Ahir</h1>
                <h3>Full Stack Developer</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-text-section text-center">
              <h3>
                <a
                  href="https://medium.com/@ahir.ankit93"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>

                <a
                  href="https://github.com/ahir-ankit93"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-ahir-40982058"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
