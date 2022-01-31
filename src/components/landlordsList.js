import { Row, Form, Container, Col } from "react-bootstrap";
import Icons from "../assets/images/icons";

import "../assets/css/main.scss";
import TwinAvatars from "../assets/images/avatar-tenants.png";

const LandlordsList = () => (
  <div>
    {/* <Container className="p-4">
      <Row className="d-flex justify-content-end">
        <Col className="col-md-1 col-lg-1">
          <Icons.FilterIcon />
        </Col>
        <Col className="col-md-4 col-lg-5">
          <p>Other filters</p>
        </Col>
      </Row>
    </Container> */}

    <Container className="p-4" fluid>
      <Row className="col-md-10">
        {/* <Col className=""> */}
        <Form>
          <Form.Check type="checkbox" id="requests" name="requests" label="" />
        </Form>
        {/* </Col> */}

        <Col className="">
          <p className="request-list-title">
            ID
            <span>
              <Icons.ArrowDownIcon />
            </span>
          </p>
        </Col>

        <Col className="">
          <p className="request-list-title">Status</p>
        </Col>

        <Col className="">
          <p className="request-list-title">
            J.Points
            <span>
              <Icons.ArrowDownIcon />
            </span>
          </p>
        </Col>

        <Col className="">
          <p className="request-list-title">
            Property
            <span>
              <Icons.ArrowDownIcon />
            </span>
          </p>
        </Col>

        <Col className="">
          <p className="request-list-title">Avatar</p>
        </Col>
      </Row>

      <Row className="col-md-10 request-list-row d-flex">
        <Form className="request-list-item">
          <Form.Check type="checkbox" id="requests" label="" />
        </Form>

        <Col className="request-list-item">
          <p className="request-list-content">L003945</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Unverified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">0Jpts</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Kilimani villas</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content"> &nbsp;</p>
          <span>
            <img src={TwinAvatars} />
          </span>
        </Col>
      </Row>
      <br />
      <Row className="col-md-10 request-list-row d-flex">
        <Form className="request-list-item">
          <Form.Check type="checkbox" id="requests" name="requests" label="" />
        </Form>

        <Col className="request-list-item">
          <p className="request-list-content">L002342</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Unverified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">0Jpts</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">SilverStone</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content"> &nbsp;</p>
          <span>
            <img src={TwinAvatars} />
          </span>
        </Col>
      </Row>
      <br />
      <Row className="col-md-10 request-list-row d-flex">
        <Form className="request-list-item">
          <Form.Check type="checkbox" id="" label="" />
        </Form>

        <Col className="request-list-item">
          <p className="request-list-content">L006730</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Unverified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">0Jpts</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Emlack</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content"> &nbsp;</p>
          <span>
            <img src={TwinAvatars} />
          </span>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LandlordsList;
