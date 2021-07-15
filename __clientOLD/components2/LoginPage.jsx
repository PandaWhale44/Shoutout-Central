/* eslint-disable class-methods-use-this */
/**
 * ************************************
 *
 * @module  LoginForm
 * @author
 * @date
 * @description stateful component that renders Login form
 *
 * ************************************
 */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <h2>Login</h2>
      <hr />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          // isInvalid={props.loginForm.errors.email.length > 0}
          // isValid={
          //   props.loginForm.values.email &&
          //   props.loginForm.errors.email.length === 0
          // }
          onChange={e => setEmail(e.target.value)}
        />
        {/* <Form.Control.Feedback type="invalid">
          {props.loginForm.errors.email}
        </Form.Control.Feedback> */}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          // isInvalid={props.loginForm.errors.password.length > 0}
          // isValid={
          //   props.loginForm.values.password &&
          //   props.loginForm.errors.password.length === 0
          // }
          onChange={e => setPassword(e.target.value)}
        />
        {/* <Form.Control.Feedback type="invalid">
          {props.loginForm.errors.password}
        </Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() =>
          props.dispatch({ type: "FORM_SUBMIT", payload: { email, password } })
        }
      >
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loginForm: state.loginForm
});

export default connect(mapStateToProps)(LoginForm);