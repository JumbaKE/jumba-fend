import { Row, Form, Container, Col } from "react-bootstrap";
import Icons from "../assets/images/icons";

import "../assets/css/main.scss";
import TwinAvatars from "../assets/images/avatar-tenants.png";

const RequestsList = () => (
  <div>
    <Container className="p-4">
      <Row className="d-flex justify-content-end">
        <Col className="col-md-1 col-lg-1">
          <Icons.FilterIcon />
        </Col>
        <Col className="col-md-4 col-lg-5">
          <p>Other filters</p>
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row className="col-md-10">
        {/* <Col className=""> */}
        <Form>
          <Form.Check type="checkbox" id="requests" name="requests" label="" />
        </Form>
        {/* </Col> */}

        <Col className="">
          <p className="request-list-title">
            Action
            <span>
              <Icons.ArrowDownIcon />
            </span>
          </p>
        </Col>

        <Col className="">
          <p className="request-list-title">Payments</p>
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
          <p className="request-list-title">User</p>
        </Col>
      </Row>

      <Row className="col-md-10 request-list-row d-flex">
        <Form className="request-list-item">
          <Form.Check type="checkbox" id="requests" label="" />
        </Form>

        <Col className="request-list-item">
          <p className="request-list-content">Award Points</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Verified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">1200Jpts</p>
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
          <p className="request-list-content">Verify Pay</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Unverified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">780Jpts</p>
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
          <p className="request-list-content">Award SMS</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">Verified</p>
        </Col>

        <Col className="request-list-item">
          <p className="request-list-content">2300Jpts</p>
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

export default RequestsList;
