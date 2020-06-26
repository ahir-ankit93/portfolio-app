import React from "react";
import { Link } from "react-router-dom";
import { Form } from "reactstrap";
import "./learn.scss";

const Learn = () => {
  return (
    <div className="auth-page-wrapper" id="learn">
      <Form className="form-container">
        <div className="back-btn">
          <Link to="/home">Home</Link>
        </div>
        <div className="form-title">
          <h1>Learn</h1>
        </div>
        <hr />
      </Form>
    </div>
  );
};

export default Learn;
