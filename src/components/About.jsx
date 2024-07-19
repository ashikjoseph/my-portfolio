import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptopImg from '../Assets/man with laptop.jpg';
import Aboutcard from './Aboutcard';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import './about.css'; // Import the CSS file for styling

function About() {
  return (
    <Container fluid className="about-section mt-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={7} className="about-text">
            <h1 className="about-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
