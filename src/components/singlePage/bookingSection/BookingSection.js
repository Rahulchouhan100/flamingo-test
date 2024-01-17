import hotelIcon from "../../../assets/images/hotel_icon.svg";
import location from "../../../assets/images/location.svg";
import veg_icon from "../../../assets/images/veg_icon.svg";
import { Card } from "react-bootstrap";
import "./bookingSection.css";
const BookingSection = () => {
  return (
    <Card className="booking_section">
      {/* <h3>₹ {singleData[0].price} Month Onwards</h3> */}
      <h3 className="fs_20 fw_600 d-flex justify-content-between">
        <span>
          {" "}
          <span className="price fs_20"> ₹ 12000</span> Month Onwards
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            d="M10.0913 15.0042L9.99967 15.0958L9.89884 15.0042C5.54467 11.0533 2.66634 8.44083 2.66634 5.79167C2.66634 3.95833 4.04134 2.58333 5.87467 2.58333C7.28634 2.58333 8.66134 3.5 9.14717 4.74667H10.8522C11.338 3.5 12.713 2.58333 14.1247 2.58333C15.958 2.58333 17.333 3.95833 17.333 5.79167C17.333 8.44083 14.4547 11.0533 10.0913 15.0042ZM14.1247 0.75C12.5297 0.75 10.9988 1.4925 9.99967 2.65667C9.00051 1.4925 7.46967 0.75 5.87467 0.75C3.05134 0.75 0.833008 2.95917 0.833008 5.79167C0.833008 9.2475 3.94967 12.08 8.67051 16.3608L9.99967 17.5708L11.3288 16.3608C16.0497 12.08 19.1663 9.2475 19.1663 5.79167C19.1663 2.95917 16.948 0.75 14.1247 0.75Z"
            fill="#ED257D"
          />
          <path
            d="M10.0913 15.0042L9.99967 15.0958L9.89884 15.0042C5.54467 11.0533 2.66634 8.44083 2.66634 5.79167C2.66634 3.95833 4.04134 2.58333 5.87467 2.58333C7.28634 2.58333 8.66134 3.5 9.14717 4.74667H10.8522C11.338 3.5 12.713 2.58333 14.1247 2.58333C15.958 2.58333 17.333 3.95833 17.333 5.79167C17.333 8.44083 14.4547 11.0533 10.0913 15.0042Z"
            fill="#ED257D"
          />
        </svg>
      </h3>
      <div className="d-flex justify-content-between">
        <div className="">
          <ul>
            <li className="w-100 color_10 fs_17 mb-1">
              <span className="icon">
                <img src={hotelIcon} />{" "}
              </span>
              Aarya Hostel/PG
              <span>
                {" "}
                <img src={veg_icon} />{" "}
              </span>
            </li>
            <li className="w-100 color_56 fs_17 mb-1">
              <span className="icon">
                <img src={location} />{" "}
              </span>
              Kapodara, Surat<span></span>
            </li>
          </ul>

          <ul className="facility mb-0">
            <li>Food</li>
            <li>Wi-fi</li>
            <li>Chair</li>
            <li>Fridge</li>
            <li>Table</li>
            <li>Cooler</li>
          </ul>
        </div>

        <div className="right_sec">
          <div className="top">
            <div className="ratting">
              <div className="border-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M3.64062 13.75L4.65625 9.35938L1.25 6.40625L5.75 6.01562L7.5 1.875L9.25 6.01562L13.75 6.40625L10.3438 9.35938L11.3594 13.75L7.5 11.4219L3.64062 13.75Z"
                    fill="#FFB800"
                  />
                </svg>
                <span className="rating_count">4.4</span>
              </div>
              <span className="d-block total_rate">5K+ratings</span>
            </div>
          </div>

          <div className="bottom">
            <h4>20 Beds Available</h4>
          </div>
        </div>
      </div>
      <button className="btn-primary rounded-pill text-white my-4 py-1 px-5 mx-auto max_wf ">
        Book Now
      </button>
    </Card>
  );
};

export default BookingSection;
