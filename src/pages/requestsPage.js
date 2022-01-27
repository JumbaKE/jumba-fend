import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";
import SideMenu from "../components/dashboard";
import Nav from "../components/navbar";
import SummaryCard from "../components/summaryCard";

import Logo from "../assets/images/main-logo.svg";
import Icons from "../assets/images/icons";
import "../assets/css/main.scss";

function RequestsPage() {
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
            <p className="main-hero-1">Requests</p>
            <p className="main-copy-1">
              You have 4 New Requests To Respond To &nbsp;
              <span>
                <FontAwesomeIcon icon={faChevronCircleRight} size="sm" />
              </span>
            </p>

            <Row className="d-flex flex-row">
              <Col className="d-flex flex-row">
                <SummaryCard
                  summaryIcon={<Icons.SummaryPendingIcon />}
                  summaryHeading="Pending"
                  summaryContent="41"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryPendingIcon />}
                  summaryHeading="All Requests"
                  summaryContent="800+"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryPiggyIcon />}
                  summaryHeading="Total Awarded"
                  summaryContent="126, 000 jpts"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Col>
              
              <Col className="d-flex flex-row p-3">
                <SummaryCard
                  summaryIcon={<Icons.SummaryWalletIcon />}
                  summaryHeading="Request Action"
                  summaryContent="Verify Payments"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryTicksIcon />}
                  summaryHeading="Rent Payments"
                  summaryContent="Verified"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryWalletIcon />}
                  summaryHeading="User Group"
                  summaryContent="Tenants"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Col>
            </Row>
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

export default RequestsPage;
