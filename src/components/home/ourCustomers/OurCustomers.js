import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hotelcon from "../../../assets/images/hotelcon.svg";
import star from "../../../assets/images/star.svg";
import client1 from "../../../assets/images/client1.png";
import top_layer from "../../../assets/images/angle_img_top.png";
import bottom_layer from "../../../assets/images/angle_img_bottom.png";

import "./ourCustomers.css";
const OurCustomersCard = () => {
  return (
    <>
      <div className="card clients_card mx-4">
        <img className="top_layer" src={top_layer} />
        <img className="bottom_layer" src={bottom_layer} />
        <div className="boxs">
          <div className="client_img">
            <img className="" src={client1} alt="Card image cap" />
          </div>
          <div className="card-body">
            <h6>Savan Nadiyadara</h6>
            <p>
              “Great place and fantastic option for living and meeting people
              from various countries. Highly recommend it!”
            </p>
            <p className="icon_content mt-3">
              <img src={hotelcon} /> Moon Co-living
            </p>
            <div className="ratting d-flex">
              <img src={star} /> <h4>4.9</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OurCustomers = () => {
  return (
    <>
      <Container className="py-5 my-5">
        <Row>
          <Col md="4">
            <OurCustomersCard />
          </Col>
          <Col md="4">
            <OurCustomersCard />
          </Col>
          <Col md="4">
            <OurCustomersCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurCustomers;
