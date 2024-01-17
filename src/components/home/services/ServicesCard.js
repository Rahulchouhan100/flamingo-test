import React from "react";
import { Card } from "react-bootstrap";
import "./services.css";

const ServicesCard = ({ img, heading, content }) => {
  return (
    <>
      <Card className="service_card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ServicesCard;
