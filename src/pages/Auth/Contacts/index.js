import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faMobileAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
    <div className="auth-page-wrapper" id="contacts">
      <div className="container">
        <div className="form-title">
          <h1>
            <FontAwesomeIcon icon={faPhoneSquareAlt} /> &nbsp; Hit Me Up
          </h1>
        </div>
        <hr />

        <div className="manageContacts">
          <FormGroup row>
            <Col sm={2}></Col>
            <Label sm={9}>
              If you are looking for a collaboration or you think I could be of
              help with to ideas, hit me up! Or just say Hi so that I know
              you've stopped by.
            </Label>
            <Col sm={1}></Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={3}></Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={3}></Col>
            <Label sm={3}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
              &nbsp; Email
            </Label>
            <Col sm={1}>:</Col>
            <Label sm={3}>ahir.ankit93@gmail.com</Label>
            <Col sm={2}></Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={3}></Col>
            <Label sm={3}>
              <FontAwesomeIcon icon={faMobileAlt} />
              &nbsp; Mobile
            </Label>
            <Col sm={1}>:</Col>
            <Label sm={3}>+918238888843</Label>
            <Col sm={2}></Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={3}></Col>
            <Label sm={3}>
              <FontAwesomeIcon icon={faLink} />
              &nbsp; Social Links
            </Label>
            <Col sm={1}>:</Col>
            <Label sm={3}>
              <h3>
                <a
                  href="https://medium.com/@ahir.ankit93"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faMedium} />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://github.com/ahir-ankit93"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/ankit-ahir-40982058"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </h3>
            </Label>
            <Col sm={2}></Col>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
