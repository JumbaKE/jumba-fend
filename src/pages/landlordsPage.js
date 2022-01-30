import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "react-avatar";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideMenu from "../components/dashboard";
import Nav from "../components/navbar";

import Logo from "../assets/images/main-logo.svg";
import Icons from "../assets/images/icons";
import "../assets/css/main.scss";
import LandlordsList from "../components/landlordsList";
import SummaryCard from "../components/summaryCard";
import TopIndividuals from "../components/topIndividuals";
import Landlord1 from "../assets/images/landlord1.png";
import Landlord2 from "../assets/images/landlord2.png";
import Landlord3 from "../assets/images/landlord3.png";

function LandlordsPage() {
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
            <p className="main-hero-1">Landlords,</p>
            <p className="main-copy-1">
              You have 4 New Landlords in the System &nbsp;
              <span>
                <FontAwesomeIcon icon={faChevronCircleRight} size="sm" />
              </span>
            </p>

            <Row className="d-flex flex-row">
              <Col className="d-flex flex-row">
                <SummaryCard
                  summaryIcon={<Icons.SummaryRequestsIcon />}
                  summaryHeading="Top Landlords"
                  summaryContent="10+"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryPiggyIcon />}
                  summaryHeading="Most Points"
                  summaryContent="45000 jpts"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SummaryCard
                  summaryIcon={<Icons.SummaryTenantsIcon />}
                  summaryHeading="With 50+ Tenants"
                  summaryContent="10+"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Col>
            </Row>

            <div className="dashboard-overview">
              <p className="sub-header">Top Landlords</p>
              <p className="main-copy-1">November 2021 stats</p>
              <Row>
                <Col className="d-flex flex-row">
                  <TopIndividuals
                    UserImage={Landlord1}
                    UserName="Esther Howard"
                    UserProperty="Lake View Aprt"
                  />

                  <TopIndividuals
                    UserImage={Landlord2}
                    UserName="Jenny Wilson"
                    UserProperty="GreenFields"
                  />

                  <TopIndividuals
                    UserImage={Landlord3}
                    UserName="Floyd Miles"
                    UserProperty="Westlands Plaza"
                  />
                </Col>
              </Row>
            </div>

            <div className="dashboard-overview">
              <p className="sub-header">New Landlords</p>
              <p className="main-copy-1">November 1-30, 2021</p>
              <LandlordsList />
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

export default LandlordsPage;
