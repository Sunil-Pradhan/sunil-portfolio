import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaWindows } from 'react-icons/fa';
import { SiVisualstudio } from 'react-icons/si';
import { FaSlack } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';


const Toolstack = () => {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
    </Row>
  );
};

export default Toolstack;
