import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SliderComponent from "../../components/singlePage/sliderSection/SliderComponent";
import hostalPg from "../../assets/images/hostel/single_img.png";

import { useState } from "react";
import CommonDetailsSections from "../../components/singlePage/commonDetailsSections/CommonDetailsSections";
import GuestReviewsRating from "../../components/singlePage/guestReviewsRating/GuestReviewsRating";
import ReviewsSection from "../../components/singlePage/reviewsSection/ReviewsSection";
import ChooseYourRoom from "../../components/singlePage/chooseYourRoom/ChooseYourRoom";
import BookingSection from "../../components/singlePage/bookingSection/BookingSection";

const sliderData = [
  { id: 1, name: "", img: hostalPg, price: 12000, title: "Single Sharing" },
  { id: 2, name: "", img: hostalPg, price: 13000, title: "Double Sharing" },
  { id: 3, name: "", img: hostalPg, price: 14000, title: "Triple Sharing" },
  { id: 4, name: "", img: hostalPg, price: 52000, title: "Copal/Co-living" },
  { id: 5, name: "", img: hostalPg, price: 15000, title: "Single Sharing" },
  { id: 6, name: "", img: hostalPg, price: 15000, title: "Single Sharing" },
];

const HostelPGSingle = () => {
  const [singleData, setSingleData] = useState(sliderData[0]);
  console.log(...sliderData, "sssssssssssss");

  // const getItem = sliderData.filter((item) => {
  //   if (item.id === 2) {
  //     return true;
  //   }
  // });
  // console.log(getItem, "sliderData vishnu v v vv v . vv v v vv ");
  const handelClick = (id) => {
    const getItem = sliderData.filter((item) => item.id === id);
    console.log(
      getItem[0].price,
      "getItem getItem pricepricepricepricepricepricepriceprice pricepriceprice"
    );
    setSingleData(getItem);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="7">
            <SliderComponent
              sliderData={sliderData}
              handelClick={handelClick}
            />
            <CommonDetailsSections />
            <GuestReviewsRating />
          </Col>
          <Col md="5">
            <BookingSection />
          </Col>
          <Col md="12">
            <ReviewsSection />
            <ReviewsSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HostelPGSingle;
