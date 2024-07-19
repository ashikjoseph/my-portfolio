import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../Assets/myImg.jpg';
import './home1.css';

function Home1() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 className="home-about-heading">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about web development and constantly seeking ways to enhance my skills and learn new technologies.
              <br /><br />
              I am confident in my abilities with
              <i>
                <b className="purple"> HTML, CSS, JavaScript, MongoDB, React</b>
              </i>
              <br /><br />
              My interests lie in creating innovative
              <b className="purple"> Web Technologies and Products</b>. I am keen on advancing my career in these areas.
              <br /><br />
              I am looking for opportunities to grow as a
              <b className="purple"> Full Stack Developer</b> and
              to gain more experience in the field.
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="home-about-social-heading">FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashikjoseph"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AKallarakkal97"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashik-joseph-k-j-550aa4251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashikkallarakkal17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home1;
