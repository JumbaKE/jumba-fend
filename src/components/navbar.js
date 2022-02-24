import React from "react";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { faPlus, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "react-avatar";

function Nav() {
  return (
    <Navbar className="nav-bar" expand="lg" variant="light">
      <Container fluid>
        <Row>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for requests"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <div className="nav-bar-button">
            <Button className="btn btn-md btn-primary col-xs-12">
              <FontAwesomeIcon icon={faPlus} size="sm" /> Invite User
            </Button>
          </div>
        </Row>

        <a href="/">
          <Row>
            <Col className="avatar-col">
              <FontAwesomeIcon icon={faBell} size="1x" />
            </Col>
            <Col className="d-flex">
              <Avatar
                name="chris mwenda"
                color="#0F3B80"
                size={40}
                textSizeRatio={2.5}
                round="20px"
              />
              <div className="avatar-names">
                <p>Chris</p>
                <p>Admin</p>
              </div>
            </Col>
          </Row>
        </a>
      </Container>
    </Navbar>
  );
}

export default Nav;
