import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { MdHtml, MdCss } from "react-icons/md";
import { FaGithub, FaBootstrap, FaAngular } from "react-icons/fa";
import { SiExpress, SiRedux } from "react-icons/si";
import { LuFileJson } from "react-icons/lu";
import './techstack.css';

function Techstack() {
  return (
    <Row className="techstack-row">
      <Col xs={6} md={3} className="tech-icons">
        <MdHtml className="icon" />
        <p className="icon-label">HTML</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <MdCss className="icon" />
        <p className="icon-label">CSS</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaBootstrap className="icon" />
        <p className="icon-label">Bootstrap</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiJavascript1 className="icon" />
        <p className="icon-label">JavaScript</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaGithub className="icon" />
        <p className="icon-label">GitHub</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <LuFileJson className="icon" />
        <p className="icon-label">JSON</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiNodejs className="icon" />
        <p className="icon-label">Node.js</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiExpress className="icon" />
        <p className="icon-label">Express</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiReact className="icon" />
        <p className="icon-label">React</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <DiMongodb className="icon" />
        <p className="icon-label">MongoDB</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <SiRedux className="icon" />
        <p className="icon-label">Redux</p>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <FaAngular className="icon" />
        <p className="icon-label">Angular</p>
      </Col>
    </Row>
  );
}

export default Techstack;
