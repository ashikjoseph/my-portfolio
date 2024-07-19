import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import './resume.css'; // Import the CSS file for styling

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Row className="justify-content-center mb-4 mt-5"> {/* Added mt-5 for margin-top */}
        <Col md="auto">
          <Button
            variant="primary"
            href="/resume.pdf"
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <iframe
            src="/resume.pdf"
            width="100%"
            height="800px"
            className="pdf-viewer"
            title="Resume"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
