import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import prop_resorts_icon from "../../../assets/images/prop_resorts_icon.jpeg";
import prop_hotels_icon from "../../../assets/images/prop_hotels_icon.jpeg";
import prop_co_icon from "../../../assets/images/prop_co_icon.jpeg";
import prop_hostel_icon from "../../../assets/images/prop_hostel_icon.jpeg";

import "./registerProperty.css";

const RegItem = () => {
  return (
    <>
      <div className="registration_box mb-3">
        <div className="img">
          {" "}
          <img src={prop_resorts_icon} />{" "}
        </div>
        <h4>Hostel/PG</h4>
        <p className="color_56 fs_17 mb-0">
          PGs or Paying Guest accommodation is the ability for a guest to rent a
          room or section of a house from the owner.
        </p>
        <div className="box_footer" align="right">
          <span className="colorRed fs_16">
            View More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.49935 15.5846C12.4114 15.5846 15.5827 12.4133 15.5827 8.5013C15.5827 4.58928 12.4114 1.41797 8.49935 1.41797C4.58733 1.41797 1.41602 4.58928 1.41602 8.5013C1.41602 12.4133 4.58733 15.5846 8.49935 15.5846Z"
                stroke="#ED257D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.60742 11.0008L10.1008 8.50042L7.60742 6"
                stroke="#ED257D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

const RegisterProperty = ({ addPropertyData }) => {
  console.log(addPropertyData, "addPropertyData");
  //   console {addProperty} addPropertyData

  const { addProperty } = addPropertyData;

  return (
    <section className="add_property_section py-5 my-4">
      <Container>
        <Row>
          <Col md="5">
            <div className="img_box">
              <img className="w-100" src={addProperty} />
              <div className="caption">
                <h4 className="text-white">
                  Boost your Business with{" "}
                  <span className="colorRed">flaminngo.com</span>
                </h4>

                <button className="btn-primary text-white rounded-pill max_wf px-4 py-2 fs_22">
                  Register your property
                </button>
              </div>
            </div>
          </Col>
          <Col md="7">
            <Row>
              <Col md="6">
                <RegItem />
              </Col>
              <Col md="6">
                <RegItem />
              </Col>
              <Col md="6">
                <RegItem />
              </Col>
              <Col md="6">
                <RegItem />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegisterProperty;
