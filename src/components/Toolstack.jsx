import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNodemon,
  SiRedux,
  SiGithub
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import './toolstack.css';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", marginTop: "50px", marginBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ fontSize: "3em" }} />
        <p className="tool-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ fontSize: "3em" }} />
        <p className="tool-label">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ fontSize: "3em" }} />
        <p className="tool-label">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{ fontSize: "3em" }} />
        <p className="tool-label">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt style={{ fontSize: "3em" }} />
        <p className="tool-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ fontSize: "3em" }} />
        <p className="tool-label">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNodejs style={{ fontSize: "3em" }} />
        <p className="tool-label">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodemon style={{ fontSize: "3em" }} />
        <p className="tool-label">Nodemon</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact style={{ fontSize: "3em" }} />
        <p className="tool-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux style={{ fontSize: "3em" }} />
        <p className="tool-label">Redux</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
