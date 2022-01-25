import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/auth/login";

import Logo from "../assets/images/main-logo.svg";
import "../assets/css/main.scss";

function LoginPage() {
  return (
    <Container fluid>
      <Row classsname="d-flex justify-content-between">
        <Col lg={7} className="login-left">
          <img src={Logo} />
          <div className="login-form h-100 d-flex justify-content-center align-items-center">
            <LoginForm />
          </div>
        </Col>
        <Col lg={5} className="login-right"></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
