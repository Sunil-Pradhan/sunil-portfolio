import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../assets/avatar.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col lg={8} md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Developer, Explorer, Learner. My hunger and curiosity drive me
              forward in directions I want to go.
              <br />
              <br />
              I’ve developed expertise in creating responsive websites and
              sophisticated web applications with{' '}
              <strong className="purple">HTML</strong>,{' '}
              <strong className="purple">CSS</strong>, and{' '}
              <strong className="purple">JavaScript</strong> over the years.
              Additionally, I’ve experience with well-known front-end frameworks
              and library such as <strong className="purple">Bootstrap</strong>,{' '}
              <strong className="purple">React</strong> and others.
              <br />
              <br />I like to experiment with new tools and frameworks to hone
              my abilities and stay current on the newest web technology.
              Additionally, I have a solid grasp of version control programs
              like Git.
            </p>
          </Col>
          <Col lg={4} md={12} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid rounded-circle"
              alt="avatar"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to connect with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sunil-Pradhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/itsSunilPradhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
