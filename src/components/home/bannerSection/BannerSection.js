import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerSection = ({ sliderData, heroIcon }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
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
                        Enquire Now
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

      <div className="slider_icon">
        <Container>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {sliderData.map((sliderItem) => {
              return (
                <div className="icon_item">
                  <Link to={sliderItem?.btnUrl} className="w_fit">
                    <img className="w-100" src={sliderItem?.img} alt="" />
                    <span>{sliderItem?.iconTitle}</span>
                  </Link>

                  {/* <div
                    className="item"
                    style={{ backgroundImage: `url(${sliderItem?.img})` }}
                  >
                    <div className=" row justify-content-md-start">
                      <div className="col-md-5 text-center text-white">
                        <div className="d-grid gap-2 d-sm-flex justify-content-center">
                          <Link
                        to={sliderItem?.btnUrl}
                        className="btn rounded-pill btn-primary px-5 w_fit"
                      >

                      </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default BannerSection;
