import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../assets/css/main.scss";
import Icons from "../assets/images/icons";

function SideMenu() {
  return (
    <Container fluid className="dash-container">
      <Row className="side-menu-row g-lg-3 d-flex flex-column">
        <Col md={1}>
          <a href="dashboard">
            <div className="menu-cols">
              <Icons.HomeIcon fillColor="black" />
              <p>Dashboard</p>
            </div>
          </a>
        </Col>
        <Col md={1}>
          <a href="requests">
            <div className="menu-cols">
              <Icons.RequestsIcon fillColor="black" />
              <p>Requests</p>
            </div>
          </a>
        </Col>
        <Col md={1}>
          <a href="points">
            <div className="menu-cols">
              <Icons.PointsIcon fillColor="black" />
              <p>Jumba Points</p>
            </div>
          </a>
        </Col>
        <Col md={1}>
          <a href="payments">
            <div className="menu-cols">
              <Icons.PaymentsIcon fillColor="black" />
              <p>Payments</p>
            </div>
          </a>
        </Col>
        <Col md={1}>
          <a href="landlords">
            <div className="menu-cols">
              <Icons.LandlordIcon fillColor="black" />
              <p>Landlords</p>
            </div>
          </a>
        </Col>
        <Col md={1}>
          <a href="tenants">
            <div className="menu-cols">
              <Icons.TenantIcon fillColor="black" />
              <p>Tenants</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SideMenu;
