import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
import FeaturedLandlord from "../assets/images/featuredLandlord.png";
import PropertyMap from "../assets/images/propertyMap.png";

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
            <Row className="p-2">
              <Col className="d-flex justify-content-between">
                <div>
                  <h2 className="properties-num">Landlord</h2>
                  <p className="location-copy">ID: L002342</p>
                  <Icons.UnverifiedChip />
                </div>
                <div>
                  <Icons.PrintUserIcon />
                </div>
              </Col>
            </Row>
            <br />
            <div className="user-details-box">
              <Row className="d-flex flex-column mx-auto p-1">
                <Col className="col-md-4 landlord-avatar">
                  <img src={FeaturedLandlord} alt="landlord image" />
                </Col>

                <Col className="col-md-10">
                  <h6 className="landlord-name">Albert Flores</h6>
                  <h6 className="landlord-property">Landlord Emlack Hse</h6>
                  <h6 className="landlord-contact">
                    <span>
                      <Icons.PhoneIcon />
                    </span>
                    +254 700 000 000
                  </h6>
                </Col>

                <Col className="col-md-10">
                  <h6 className="landlord-points">0 jumba points</h6>
                </Col>

                <Col className="col-md-12">
                  <h6 className="property-lease">Monthly Rent, 1 year lease</h6>
                </Col>
              </Row>
            </div>
            <br />
            <Row className="d-flex flex-row">
              <Col className="col-md-10 properties-num">Properties(12)</Col>

              <Col className="col-md-12 d-flex">
                <Icons.LocationPinIcon /> &nbsp;
                <h6 className="location-copy">Kilimani Police Station</h6>
              </Col>
              <Col className="col-md-6">
                <img src={PropertyMap} alt="map" className="prop-map" />
              </Col>
            </Row>

            <br />
            <Row className="d-flex flex-column">
              <Col className="col-md-12 d-flex justify-content-center">
                <div className="prop-details-group">
                  <Icons.SmallHomeIcon /> &nbsp;
                  <h6 className="prop-details-copy">Kilimani Villas</h6>
                </div>
                <div className="prop-details-group">
                  <Icons.OpenDoorIcon /> &nbsp;
                  <h6 className="prop-details-copy">12 units</h6>
                </div>
              </Col>
              &nbsp; &nbsp;
              <Col className="col-md-12 d-flex justify-content-center">
                <div className="prop-details-group">
                  <Icons.SmallKeyIcon /> &nbsp;
                  <h6 className="prop-details-copy">12 Tenants</h6>
                </div>
                <div className="prop-details-group">
                  <Icons.SmallwalletIcon /> &nbsp;
                  <h6 className="prop-details-copy">Kshs 68k</h6>
                </div>
              </Col>
            </Row>
            &nbsp; &nbsp;
            <Row>
              <Col>
                <Button className="btn-md btn-success col-md-12">Verify</Button>
              </Col>
            </Row>
          </div>{" "}
          {/* End of right panel */}
        </Col>
      </Row>
    </Container>
  );
}

export default LandlordsPage;
