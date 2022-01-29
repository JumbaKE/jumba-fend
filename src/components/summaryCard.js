import "../assets/css/main.scss";
import { Row, Col } from "react-bootstrap";

const SummaryCard = ({ summaryIcon, summaryHeading, summaryContent }) => (
  <div className="summary-card">
    <Row className="summary-row d-flex flex-column">
      <Col className="col-md-2">{summaryIcon}</Col>

      <Col className="col-md-12">
        <p className="summary-heading-text">{summaryHeading}</p>
      </Col>

      <Col className="col-md-12">
        <p className="summary-content-text">{summaryContent}</p>
      </Col>
    </Row>
  </div>
);

export default SummaryCard;
