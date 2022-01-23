import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../components/auth/register";

import Logo from "../assets/images/main-logo.svg";
import "../assets/css/main.scss";

function RegisterPage() {
  return (
    <Container fluid>
      <Row classsname="d-flex justify-content-between">
        <Col lg={5} className="register-left">
          <img src={Logo} />
        </Col>

        <Col lg={6} className="register-right">
          <div className="login-form h-100 d-flex justify-content-center align-items-center">
            <RegisterForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
