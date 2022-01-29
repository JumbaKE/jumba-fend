import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";
import SideMenu from "../components/dashboard";
import Nav from "../components/navbar";

import Logo from "../assets/images/main-logo.svg";
import Icons from "../assets/images/icons";
import "../assets/css/main.scss";
import RequestsList from "../components/requestsList";

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
              <RequestsList />
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

            <div className="request-action">
              <Row>
                <Col className="col-md-2">
                  <Icons.MegaPhoneIcon />
                </Col>
                <Col className="col-md-9">
                  <p className="main-copy-3">
                    Award 1200 pts to Tenant ID XXX for{" "}
                    <span className="font-weight-bold">
                      On time Rent payment
                    </span>{" "}
                    for November, 2021
                  </p>
                </Col>
              </Row>
            </div>
            <br></br>
            <Row className="d-flex justify-content-start">
              <p className="main-copy-3">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;11th Nov 2021 14:17 HRS
              </p>
            </Row>
            <Row>
              <Col>
                <p className="request-title d-flex justify-content-center">
                  Tenant - Kilimani Villas{" "}
                </p>
              </Col>
            </Row>
            <div className="tenant-details">
              <Row>
                <Col className="col-md-12 d-flex justify-content-center">
                  <p>Brooklyn Simmons, Hse 227</p>
                </Col>

                <Col className="col-md-7 tenant-details-row-1 justify-content-around">
                  <p>Users</p>
                  <Row>
                    <Avatar
                      name="wikkie mosh"
                      color="#0F3B80"
                      size={27}
                      textSizeRatio={1}
                      round="20px"
                    />

                    <Avatar
                      name="jane doe"
                      color="#0F3B80"
                      size={27}
                      textSizeRatio={1}
                      round="20px"
                    />
                  </Row>
                </Col>

                <Col className="col-md-10 tenant-details-row-2 justify-content-around">
                  <p>Points</p>
                  <Icons.PointsIcon fillColor="#000" />
                  <p>7600</p>
                </Col>
              </Row>
            </div>

            <Row>
              <Col className="p-4">
                <p className="request-title d-flex justify-content-center">
                  Transaction History
                </p>
              </Col>
              <Col className="col-md-12 transaction-history">
                <Row>
                  <p className="transaction-copy">MTX1Q9853</p>
                  <Icons.VerifiedIcon />
                </Row>
                <Row className="transaction-copy">
                  <p>MTX1Q9853</p>
                  <Icons.VerifiedIcon />
                </Row>
                <Row className="transaction-copy">
                  <p>MTX1Q9853</p>
                  <Icons.VerifiedIcon />
                </Row>
              </Col>
            </Row>

            <Row className="p-3">
              <Col className="row-divider col-md-7 mx-auto" />
            </Row>

            <Row className="p-3 mx-auto">
              <Col>
                <Icons.AcceptIcon />
                <p>Award</p>
              </Col>

              <Col>
                <Icons.CancelIcon />
                <p>Decline</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
