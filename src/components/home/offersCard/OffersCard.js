import React from "react";
import "./offersCard.css";
import calander_svg from "../../../assets/images/calander_svg.svg";
const OffersCard = ({ data }) => {
  console.log(data, "data data data data data");
  return (
    <>
      <div className="card card_offer flex-row">
        <div className="card-header p-0 border-0">
          <img src={data.hostel_pg_offer} alt="" />
        </div>
        <div className="card-block p-3">
          <h4 className="card-title fs_23 text_dark">Hostel/PG</h4>
          <p className="card-text mb-2 fs_20">
            Get uo to 20% off on Hostels Home stays Hourly stays!
          </p>
          <small className="d-flex">
            <img className="me-2" src={calander_svg} />
            Valid till 1st jan-2023
          </small>
          <a href="#" className="link">
            View More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.49935 15.5846C12.4114 15.5846 15.5827 12.4133 15.5827 8.5013C15.5827 4.58928 12.4114 1.41797 8.49935 1.41797C4.58733 1.41797 1.41602 4.58928 1.41602 8.5013C1.41602 12.4133 4.58733 15.5846 8.49935 15.5846Z"
                stroke="#ED257D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.60742 11.0008L10.1008 8.50042L7.60742 6"
                stroke="#ED257D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
