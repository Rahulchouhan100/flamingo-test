import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactCard from "./ContactCard";
import "./contactUs.css";

const ContactUs = ({ ContactUsData }) => {
  return (
    <section className="contact_us_sec">
      <Container>
        <h4>Contact Us</h4>
        <Row className="mt-3">
          {ContactUsData.map((item) => {
            return (
              <Col md={3} className="right_line mb-4">
                <ContactCard
                  img={item.img}
                  heading={item.heading}
                  content={item.content}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
