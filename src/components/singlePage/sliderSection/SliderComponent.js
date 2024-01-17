import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slider.css";

const SliderComponent = ({ sliderData, handelClick }) => {
  const [navFirst, setNavFirst] = useState(null);
  const [navSecond, setNavSecond] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  console.log(sliderData, "fgfgfgffgf");

  useEffect(() => {
    setNavFirst(slider1);
    setNavSecond(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    loop: true,
  };

  return (
    <div className="">
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={navSecond}
          ref={(slider) => setSlider1(slider)}
        >
          {sliderData.map((slide) => (
            <div className="slick-slide" key={slide.id}>
              {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
              <img className="slick-slide-image" src={slide.img} />
              {/* <label className="slick-slide-label">{slide.label}</label> */}
            </div>
          ))}
        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={navFirst}
            ref={(slider) => setSlider2(slider)}
          >
            {sliderData.map((slide) => (
              <div
                className="slick-slide"
                key={slide.id}
                onClick={() => handelClick(slide.id)}
              >
                <img className="slick-slide-image" src={slide.img} />
                <label className="slick-slide-label">{slide.title}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
