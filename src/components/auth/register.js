import React from "react";
import { Form, Button } from "react-bootstrap";
import GoogleLogin from "react-google-login";

import "../../assets/css/login.scss";

function RegisterForm() {
  return (
    <div>
      <p>Register with your credentials below</p>
      <p className="header-1">Sign up To Jumba</p>
      <p>
        Already a Member?{" "}
        <span>
          <a href="/">Login Here</a>
        </span>
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="6 characters + 1 Symbol" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me?" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block">
          Create an account
        </Button>
        <br />
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          className="google-login-button"
          buttonText="Sign up with Google"
          onSuccess={true}
          onFailure={true}
          cookiePolicy={"single_host_origin"}
        />

        <div className="register-disclaimer">
          <p>
            This site is protected by reCAPTURE and the Google{" "}
            <span>
              <a href="">Privacy Policy</a>
            </span>{" "}
            and
            <span>
              <a href="">Terms and Conditions</a>
            </span>{" "}
            apply.
          </p>
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;
