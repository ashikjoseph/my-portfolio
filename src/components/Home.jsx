import React from 'react';
import homeLogo from "../Assets/home-main.svg";
import { Container, Row, Col } from "react-bootstrap";
import './home.css';
import Home1 from './Home1';
import Home2 from './Home2';

function Home() {
  return (
    <section className="home-section">
      <Container fluid className="home-content" id="home">
        <Row className="align-items-center">
          <Col md={7} className="home-header">
            <h1 className="greeting">
              Hello, I'm
            </h1>
            <h1 className="name">
              Ashik Joseph KJ
            </h1>
            <div className="home-description">
              <Home2 />
            </div>
          </Col>
          <Col md={5} className="home-logo-col">
            <img
              src={homeLogo}
              alt="home logo"
              className="img-fluid home-logo"
            />
          </Col>
        </Row>
      </Container>
      <Home1 />
    </section>
  );
}

export default Home;
