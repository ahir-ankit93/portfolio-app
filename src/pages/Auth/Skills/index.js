import React from "react";
import { Form, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import design from "../../../Images/painting-palette.png";
import webPage from "../../../Images/web-page.png";
import database from "../../../Images/database.png";
import browser from "../../../Images/browser.png";
const Skills = () => {
  return (
    <div className="auth-page-wrapper" id="skills">
      <Form className="container">
        <div className="form-title">
          <h1>
            <FontAwesomeIcon icon={faLaptopCode} /> &nbsp; My Skills
          </h1>
        </div>
        <hr />

        <Row>
          <Col sm={3}>
            <img src={design} alt="" style={{ width: "100px" }} />
          </Col>
          <Col sm={3}>
            <img src={browser} alt="" style={{ width: "100px" }} />
          </Col>
          <Col sm={3}>
            <img src={database} alt="" style={{ width: "100px" }} />
          </Col>
          <Col sm={3}>
            <img src={webPage} alt="" style={{ width: "100px" }} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={3}>
            <h4>Design</h4>
          </Col>
          <Col sm={3}>
            <h4>Frameworks & libraries</h4>
          </Col>
          <Col sm={3}>
            <h4>Server-side & Databases</h4>
          </Col>
          <Col sm={3}>
            <h4>Third party PaaSes</h4>
          </Col>
        </Row>
        <Row>
          <hr />
        </Row>
        <Row>
          <Col sm={3}>
            <h6>
              HTML5 <br />
              <br /> CSS3 <br />
              <br /> SASS <br />
              <br /> JavaScript
            </h6>
          </Col>
          <Col sm={3}>
            <h6>
              ReactJS
              <br />
              <br /> AngularJs/Angular <br />
              <br /> JQuery
            </h6>
          </Col>
          <Col sm={3}>
            <h6>
              Express <br />
              <br /> NodeJS <br />
              <br /> MongoDB <br />
              <br /> MYSQL <br />
              <br /> SQL Server
            </h6>
          </Col>
          <Col sm={3}>
            <h6>
              Amazon Web Services
              <br /> <br /> Heroku
              <br /> <br /> Firebase
            </h6>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Skills;
