import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./trendingGetaways.css";
const TrendingGetaways = ({ data }) => {
  console.log(data, "data data data");
  return (
    <>
      <div className="trendingGetaways my-5">
        <Container>
          <Row>
            {data.map((item) => {
              return (
                <>
                  <Col md="4">
                    <Row>
                      <Col sm="6">
                        <img
                          className="w-100"
                          src={item.img1}
                          alt={"tranding1"}
                        />
                      </Col>
                      <Col sm="6">
                        <img
                          className="mb-2 w-100"
                          src={item.img2}
                          alt={"tranding1_1"}
                        />
                        <img
                          className="mt-2 w-100"
                          src={item.img3}
                          alt={"tranding1_2"}
                        />
                      </Col>
                      <Col md="12 mt-3">
                        <h4>{item.heading}</h4>
                        <p>{item.content}</p>
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TrendingGetaways;
