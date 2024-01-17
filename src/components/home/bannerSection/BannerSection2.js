import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.min.js";
import Slider from "react-slick";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./bannerSection.css";
const BannerSection = ({ sliderData, heroIcon }) => {
  let settings = {
    dots: false,
    className: "sample",
  };
  //   const [hostel_pg, coliving, hotels, resorts] = heroIcon;
  console.log(sliderData);
  return (
    <>
      <Slider {...settings}>
        {sliderData.map((sliderItem) => {
          return (
            <div className="hero_banner">
              <div
                className="item"
                style={{ backgroundImage: `url(${sliderItem?.img})` }}
              >
                <div className=" row justify-content-md-start">
                  <div className="col-md-5 text-center text-white">
                    <h2 className="ff_rubik fs_30 mb-3">
                      {sliderItem?.heading}
                    </h2>
                    <p className="ff_Kaushan fs_30 mb-5">
                      {sliderItem?.content}

                      {sliderItem?.content2}
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-center">
                      <Link
                        to={sliderItem?.btnUrl}
                        className="btn rounded-pill btn-primary px-5 w_fit"
                      >
                        Enquire Now{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M12.0254 4.94141L17.0837 9.99974L12.0254 15.0581"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.91699 10H16.942"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <section className="banner_bottom">
        <Container>
          <Row className="justify-content-center page_link">
            {heroIcon.map((items) => {
              return (
                <>
                  <Col sm={2}>
                    <Link to={items.url}>
                      <img src={items.img} className="w-100" />
                      <span className="pt-3 d-inline-block">
                        {" "}
                        {items.urlTitle}
                      </span>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BannerSection;
