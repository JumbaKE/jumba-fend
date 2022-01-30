import { Row, Container, Col } from "react-bootstrap";

import Icons from "../assets/images/icons";
import "../assets/css/main.scss";

const OverviewCard = () => (
  <div>
    <Container>
      <Row className="overview-card col-md-10">
        <Col className="overview-cols d-flex justify-content-around align-items-center">
          <Row>
            <Icons.SummaryTenantsIcon />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Active Tenants</h5>
            <h5 className="overview-content">43</h5>
          </Row>
        </Col>

        <Col className="overview-cols d-flex justify-content-around align-items-center">
          <Row>
            <Icons.SummaryPiggyIcon />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Total Points</h5>
            <h5 className="overview-content">300,000 jpts</h5>
          </Row>
          {/* <span className="vertical-divider" /> */}
        </Col>

        <Col className="overview-cols d-flex justify-content-around align-items-center">
          <Row>
            <Icons.SummaryTenantsIcon />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Total Redeemed</h5>
            <h5 className="overview-content">44, 000jpts</h5>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default OverviewCard;
