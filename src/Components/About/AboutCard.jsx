import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello, I am Sunil Pradhan, born and brought up in Odisha. I have
            four years of experience as a front-end developer. I’m passionate
            about building stunning, intuitive websites that offer wonderful
            user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🗺️
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
