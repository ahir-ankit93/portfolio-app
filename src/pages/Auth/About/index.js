import React from "react";
import { Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="auth-page-wrapper" id="about">
      <Form className="container">
        <div className="form-title">
          <h1>
            <FontAwesomeIcon icon={faUser} /> &nbsp; About Me
          </h1>
        </div>
        <div className="imageAbt"></div>
        <hr />

        <h5 className="containManage">
          Hello, my name is Ankit and I`m a Full Stack Developer. I've been a
          web developer since 2016. For the last 4 years, I specialized in
          React, Angular, and Node.js. I position myself not just a programmer,
          I consider myself as a person who solves business problems. I take an
          active part in the development and offer of new technologies for
          solving problems and tasks. I consider myself a good team player not
          only in the project but also in the company. Flexible with development
          solutions, and always open for ideas generation with a big aim for a
          top result in the end, you have the idea and I will make sure it's
          implemented.
        </h5>
      </Form>
    </div>
  );
};

export default About;
