import React from "react";
import { Card } from "react-bootstrap";
import "./reviewsSection.css";

import review_img from "../../../assets/images/review_img.png";

const ReviewsSection = () => {
  return (
    <section className="reviews_section mb-4">
      <Card className="border-0">
        <div className="fl_name me-4">
          <span>KV</span>
        </div>
        <div className="review w-100">
          <div className="review_top d-flex justify-content-between">
            <h4 className="fs_20 color_10">
              Keval Vasoya <span>( Stayed 18 Sep, 2023 )</span>
            </h4>
            <div className="review_rate">
              <span>3/5</span>
            </div>
          </div>
          <p className="review_number fs_18 color_93 mb-0">3 Reviews</p>
          <p className="fs_15 color_10">
            Location is fine. but need to improve upon hygiene and cleanliness.
            Staff was cordial. Rooms and shops washroom needs renovation.
          </p>
          <div className="reviewImg">
            <ul className="p-0">
              <li>
                <img src={review_img} />{" "}
              </li>
              <li>
                <img src={review_img} />{" "}
              </li>
              <li>
                <img src={review_img} />{" "}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ReviewsSection;
