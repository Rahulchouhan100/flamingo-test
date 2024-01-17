import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./guestReviewsRating.css";

const GuestReviewsRating = () => {
  return (
    <section className="review_rating_section my-4">
      <h4>Guest Reviews & Rating for Aarya Hostel/PG</h4>
      <Card className="p-3 border-0 mt-3">
        <Row>
          <Col md="3">
            <div className="go_ratting">
              <p className="mb-0">Go-Rating</p>
              <h3>3.6/5</h3>
              <p>10+ Rating</p>
              <p>20+ Reviews</p>
            </div>
          </Col>
          <Col md="9">
            <div className="star_ratting">
              <ul className="p-0">
                <li className="five">
                  <span className="ratting_number">
                    5{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85449 18.3333L6.20866 12.4792L1.66699 8.54167L7.66699 8.02083L10.0003 2.5L12.3337 8.02083L18.3337 8.54167L13.792 12.4792L15.1462 18.3333L10.0003 15.2292L4.85449 18.3333Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </span>
                  <ProgressBar now={60} />
                  <span className="total">56</span>
                </li>
                <li className="four">
                  <span className="ratting_number">
                    4{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85449 18.3333L6.20866 12.4792L1.66699 8.54167L7.66699 8.02083L10.0003 2.5L12.3337 8.02083L18.3337 8.54167L13.792 12.4792L15.1462 18.3333L10.0003 15.2292L4.85449 18.3333Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </span>
                  <ProgressBar now={60} />
                  <span className="total">56</span>
                </li>
                <li className="three">
                  <span className="ratting_number">
                    3{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85449 18.3333L6.20866 12.4792L1.66699 8.54167L7.66699 8.02083L10.0003 2.5L12.3337 8.02083L18.3337 8.54167L13.792 12.4792L15.1462 18.3333L10.0003 15.2292L4.85449 18.3333Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </span>
                  <ProgressBar now={60} />
                  <span className="total">56</span>
                </li>
                <li className="two">
                  <span className="ratting_number">
                    2{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85449 18.3333L6.20866 12.4792L1.66699 8.54167L7.66699 8.02083L10.0003 2.5L12.3337 8.02083L18.3337 8.54167L13.792 12.4792L15.1462 18.3333L10.0003 15.2292L4.85449 18.3333Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </span>
                  <ProgressBar now={60} />
                  <span className="total">56</span>
                </li>
                <li className="one">
                  <span className="ratting_number">
                    1{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.85449 18.3333L6.20866 12.4792L1.66699 8.54167L7.66699 8.02083L10.0003 2.5L12.3337 8.02083L18.3337 8.54167L13.792 12.4792L15.1462 18.3333L10.0003 15.2292L4.85449 18.3333Z"
                        fill="#FFB800"
                      />
                    </svg>
                  </span>
                  <ProgressBar now={60} />
                  <span className="total">56</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default GuestReviewsRating;
