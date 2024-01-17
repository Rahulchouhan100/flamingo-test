import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./ServicesCard";

const Services = ({ ServicesData }) => {
  return (
    <>
      <section className="services_section">
        <Container>
          <h4>Services</h4>
          <Row>
            {ServicesData.map((item) => {
              return (
                <Col md={3}>
                  <ServicesCard
                    img={item.img}
                    content={item.content}
                    heading={item.heading}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
