import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./guestManagement.css";

const GuestManagement = ({ guestManagement }) => {
  console.log(guestManagement.img, "img");
  return (
    <>
      <section className="py-5 management">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <img className="img-fluid " src={guestManagement.img} />
            </Col>
            <Col md={6}>
              <h4>{guestManagement.heading}</h4>
              <p>{guestManagement.paran}</p>
              <p>{guestManagement.paran2}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GuestManagement;
