import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEye } from 'react-icons/fa';

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <Button variant="primary" href={props.demoLink} target="_blank">
          <FaEye /> &nbsp;
          {'View the site'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
