import "../assets/css/main.scss";
import { Row, Col, Container } from "react-bootstrap";

const TopIndividuals = ({ UserImage, UserName, UserProperty }) => (
  <Container fluid>
    <Row className="d-flex flex-row">
      <Col className="col-md-3">
        <img src={UserImage} alt="user icon" />
      </Col>

      <Col className="col-md-6">
        <h5 className="user-names">{UserName}</h5>
        <h5 className="user-property">{UserProperty}</h5>
      </Col>
    </Row>
  </Container>
);

export default TopIndividuals;
