import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "../components/dashboard";
import Nav from "../components/navbar";

import Logo from "../assets/images/main-logo.svg";
import Icons from "../assets/images/icons";
import "../assets/css/main.scss";

function DashboardPage() {
  return (
    <Container fluid className="dashboard-main-container">
      <Row classsname="d-flex justify-content-between">
        <Col lg={2} className="dashboard-left">
          <img src={Logo} className="offset-md-2 mx-auto" />
          <SideMenu />
        </Col>

        <Col lg={8} className="dashboard-center">
          <Nav />
          <div className="main-dashboard">
            <p className="main-hero-1">Hello Chris,</p>
            <p className="main-copy-1">
              You have 4 New Requests To Respond To &nbsp;
              <span>
                <FontAwesomeIcon icon={faChevronCircleRight} size="sm" />
              </span>
            </p>

            <div className="dashboard-overview">
              <p className="sub-header">Overview</p>
              <p className="main-copy-1">November 2021 stats</p>
            </div>

            <div className="dashboard-overview">
              <p className="sub-header">Requests</p>
              <p className="main-copy-1">November 1-30, 2021</p>
            </div>
          </div>
        </Col>

        <Col lg={2} className="dashboard-right">
          <div>
            <Row>
              <Col className="d-flex justify-content-between">
                <div>
                  <p>ID: HTR000238</p>
                  <p>Request</p>
                </div>
                <div>
                  <Icons.EditIcon />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Icons.MegaPhoneIcon />
              </Col>
              <Col className="md-2">
                <p className="main-copy-1">
                  Award 1200 pts to Tenant ID XXX for <span className="font-weight-bold">On time Rent payment</span> for
                  November, 2021
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
