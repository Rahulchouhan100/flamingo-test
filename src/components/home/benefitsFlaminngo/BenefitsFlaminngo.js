import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import hostel_pg_offer from "../../../assets/images/hostel_pg_offer.png";
import OffersCard from "../offersCard/OffersCard";

const BenefitsFlaminngo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 2,
  };
  const benefitData = [
    {
      hostel_pg_offer,

      type: "Hostel",
    },
    {
      hostel_pg_offer,

      type: "Hostel",
    },
    {
      hostel_pg_offer,

      type: "Hostel",
    },
  ];
  return (
    <>
      <Container>
        <h4 className="heading">Benefits of Flaminngo</h4>
        <Slider {...settings}>
          {benefitData.map((items) => {
            return (
              <>
                <OffersCard data={items} />
              </>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default BenefitsFlaminngo;
