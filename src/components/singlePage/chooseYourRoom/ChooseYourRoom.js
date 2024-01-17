import React from "react";
import { Card } from "react-bootstrap";
import "./chooseYourRoom.css";
import review_img from "../../../assets/images/review_img.png";

const ChooseYourRoom = () => {
  return (
    <section className="choose_your_room mb-4">
      <Card className="border-0">
        <h4 className="heading text-white fs_16">SELECTED CATEGORY</h4>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div className="">
            <h4 className="fs_24 color_10 mb-0">Ac room</h4>
            <p className="color_93 fs_20 mb-0">Room size: 81 sqft</p>
          </div>
          <Card.Img variant="top" src={review_img} />
        </Card.Body>
        <div className="d-flex card_footer justify-content-between align-items-center p-3 ">
          <div>
            <h4 className="fs_20 color_10 mb-0">
              ₹20000 <span className="strick">₹30365</span>
            </h4>
          </div>
          <button className="select_btn">Select</button>
        </div>
      </Card>
    </section>
  );
};

export default ChooseYourRoom;
