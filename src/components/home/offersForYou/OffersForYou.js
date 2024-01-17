import React, { useState } from "react";
import OffersCard from "../offersCard/OffersCard";
import hostel_pg_offer from "../../../assets/images/hostel_pg_offer.png";
import calander_svg from "../../../assets/images/calander_svg.svg";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import "./offersForYou.css";

const offerData = [
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
  {
    hostel_pg_offer,

    type: "Co-living",
  },
  {
    hostel_pg_offer,

    type: "Co-living",
  },
  {
    hostel_pg_offer,

    type: "Resorts",
  },
  {
    hostel_pg_offer,

    type: "Hotels",
  },
];

const OffersForYou = () => {
  const [offersData, setOffersData] = useState(offerData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 2,
  };
  const typeCheck = (type) => {
    const inputValue = type;

    const filteredResults = offerData.filter(
      (item) =>
        item.type && item.type.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOffersData(filteredResults);
    console.log(filteredResults, "filteredResults");
  };
  const typeCheckAll = () => {
    setOffersData(offerData);
  };
  return (
    <>
      <Container className="py-5">
        <h4 className="heading">Offers For You</h4>
        <div>
          <ul className="btn_sec d-flex">
            <li onClick={() => typeCheckAll()}>All</li>
            <li onClick={() => typeCheck("hostel")}>Hostel/PG</li>
            <li onClick={() => typeCheck("Co-living")}>Co-living</li>
            <li onClick={() => typeCheck("Hotels")}>Hotels</li>
            <li onClick={() => typeCheck("Resorts")}>Resorts</li>
          </ul>

          <Slider {...settings}>
            {offersData.map((items) => {
              return (
                <>
                  <OffersCard data={items} />
                </>
              );
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default OffersForYou;
