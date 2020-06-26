import React from "react";
import { Link } from "react-router-dom";
import "./authHeader.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AuthHeader = () => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img alt="logo" className="brand_logo " src="/logo-square.png" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/skills">SKILLS</Link>
            <Link to="/contacts">CONTACTS</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default AuthHeader;
