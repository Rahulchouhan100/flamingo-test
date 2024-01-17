import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "../common/form/Form";
import PriceSummary from "../common/priceSummary/PriceSummary";
import ThankYou from "../common/thankYou/ThankYou";
import ChooseYourRoom from "../singlePage/chooseYourRoom/ChooseYourRoom";
import CommonDetailsSections from "../singlePage/commonDetailsSections/CommonDetailsSections";
import GuestReviewsRating from "../singlePage/guestReviewsRating/GuestReviewsRating";
import ReviewsSection from "../singlePage/reviewsSection/ReviewsSection";
import SliderComponent from "../singlePage/sliderSection/SliderComponent";

const All = () => {
  return (
    <>
      <ThankYou
        title={"Payment Successful !"}
        message={"Thank you! your payment 0f Rs. 4,500 has been received."}
        description={`Order ID: IC-1234 | 
        Transaction ID: 123456`}
        btnText="Ok"
        isbtn={false}
      />

      <ThankYou
        title={"Payment !"}
        message={
          "Thank you! dffdl;msf;fm payment 0f Rs. 4,500 has been received."
        }
        description={`Order IDsfjsffvlsf: IC-1234 | 
        Transaction ID: 123456`}
        btnText="Cancle"
        isbtn={true}
      />

      <Container>
        <Form />
        <Row>
          <Col md="6">
            <PriceSummary />
            <ReviewsSection />
            <CommonDetailsSections />
            <GuestReviewsRating />
            <ChooseYourRoom />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default All;
