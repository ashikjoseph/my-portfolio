import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer mt-5">
      <Row>
        <Col md="4"></Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{ fontSize: "20px" }}>
            &copy; Developed by Ashik Joseph {year}
          </h3>
        </Col>
        <Col md="4"></Col>
      </Row>
    </Container>
  );
}

export default Footer;
