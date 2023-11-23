import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import leadsguru from '../../assets/Projects/leadsguru.jpg';
import heartlandyoga from '../../assets/Projects/heartlandyoga.jpg';
import rivercruisenetwork from '../../assets/Projects/rivercruisenetwork.jpg';


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white', textAlign: 'center' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col lg={4} md={12} className="project-card">
            <ProjectCard
              imgPath={leadsguru}
              title="LeadsGuru"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              demoLink="https://www.leadsguru.in/"
            />
          </Col>

          <Col lg={4} md={12} className="project-card">
            <ProjectCard
              imgPath={heartlandyoga}
              title="Heartland Yoga"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              demoLink="https://www.heartlandyog.org/"
            />
          </Col>

          <Col lg={4} md={12} className="project-card">
            <ProjectCard
              imgPath={rivercruisenetwork}
              title="Rivercruise Network"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              demoLink="https://www.rivercruisenetwork.com//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
