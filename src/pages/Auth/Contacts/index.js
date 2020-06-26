import React from "react";
import { Field, reduxForm } from "redux-form";
import { Col, FormGroup, Label, Form } from "reactstrap";
import ValidatedInput from "../../../components/ValidatedInput";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";

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
        <Form className="form-container">
          <h6>
            If you are looking for a collaboration or you think I could be of
            help with to ideas, hit me up! Or just say Hi so that I know you've
            stopped by.
          </h6>

          <FormGroup row>
            <Label sm={4}>Name</Label>
            <Col sm={7}>
              <Field
                component={ValidatedInput}
                type="text"
                name="name"
                placeholder="Name"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={4} xs={12}>
              Email Address
            </Label>
            <Col sm={7} xs={10}>
              <Field
                component={ValidatedInput}
                type="email"
                name="email"
                placeholder="Email"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={4}>Message</Label>
            <Col sm={7}>
              <Field
                component={ValidatedInput}
                type="textarea"
                name="message"
                placeholder="Message here"
              />
            </Col>
          </FormGroup>

          <div className="button_wrapper">
            <button className="custom-btn-primary" type="submit">
              Let's Connect
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Field is required";
  }
  if (!values.message) {
    errors.message = "Field is required";
  }

  if (!values.email) {
    errors.email = "Field is required";
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const ContactsComponent = connect()(Contacts);

export default reduxForm({
  form: "ContactsForm",
  validate,
})(ContactsComponent);
