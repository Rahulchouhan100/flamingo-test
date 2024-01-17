import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";
import "./productCard.css";

const ProductCard = ({ data }) => {
  const { addFavorite } = useAuthContext();

  return (
    <>
      <Card className="product_card">
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>
            <span>
              ₹ {data.price}
              <span className="onwards">/ {data.onwards}</span>
            </span>{" "}
            <span onClick={() => addFavorite(data)}>
              {data.isFavourite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11.0913 17.0042L10.9997 17.0958L10.8988 17.0042C6.54467 13.0533 3.66634 10.4408 3.66634 7.79167C3.66634 5.95833 5.04134 4.58333 6.87467 4.58333C8.28634 4.58333 9.66134 5.5 10.1472 6.74667H11.8522C12.338 5.5 13.713 4.58333 15.1247 4.58333C16.958 4.58333 18.333 5.95833 18.333 7.79167C18.333 10.4408 15.4547 13.0533 11.0913 17.0042ZM15.1247 2.75C13.5297 2.75 11.9988 3.4925 10.9997 4.65667C10.0005 3.4925 8.46967 2.75 6.87467 2.75C4.05134 2.75 1.83301 4.95917 1.83301 7.79167C1.83301 11.2475 4.94967 14.08 9.67051 18.3608L10.9997 19.5708L12.3288 18.3608C17.0497 14.08 20.1663 11.2475 20.1663 7.79167C20.1663 4.95917 17.948 2.75 15.1247 2.75Z"
                    fill="#ED257D"
                  />
                  <path
                    d="M11.0913 17.0042L10.9997 17.0958L10.8988 17.0042C6.54467 13.0533 3.66634 10.4408 3.66634 7.79167C3.66634 5.95833 5.04134 4.58333 6.87467 4.58333C8.28634 4.58333 9.66134 5.5 10.1472 6.74667H11.8522C12.338 5.5 13.713 4.58333 15.1247 4.58333C16.958 4.58333 18.333 5.95833 18.333 7.79167C18.333 10.4408 15.4547 13.0533 11.0913 17.0042Z"
                    fill="#ED257D"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11.0913 17.0042L10.9997 17.0958L10.8988 17.0042C6.54467 13.0533 3.66634 10.4408 3.66634 7.79167C3.66634 5.95833 5.04134 4.58333 6.87467 4.58333C8.28634 4.58333 9.66134 5.5 10.1472 6.74667H11.8522C12.338 5.5 13.713 4.58333 15.1247 4.58333C16.958 4.58333 18.333 5.95833 18.333 7.79167C18.333 10.4408 15.4547 13.0533 11.0913 17.0042ZM15.1247 2.75C13.5297 2.75 11.9988 3.4925 10.9997 4.65667C10.0005 3.4925 8.46967 2.75 6.87467 2.75C4.05134 2.75 1.83301 4.95917 1.83301 7.79167C1.83301 11.2475 4.94967 14.08 9.67051 18.3608L10.9997 19.5708L12.3288 18.3608C17.0497 14.08 20.1663 11.2475 20.1663 7.79167C20.1663 4.95917 17.948 2.75 15.1247 2.75Z"
                    fill="#ED257D"
                  />
                </svg>
              )}
            </span>
          </Card.Title>
          <Card.Text className="mb-0">
            <div className="left_sec">
              <ul>
                <li>
                  <h4 className="hotel_name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M16.5 15.75H1.5V14.25H2.25V3C2.25 2.80109 2.32902 2.61032 2.46967 2.46967C2.61032 2.32902 2.80109 2.25 3 2.25H13.5C13.6989 2.25 13.8897 2.32902 14.0303 2.46967C14.171 2.61032 14.25 2.80109 14.25 3V6.75H15.75V14.25H16.5V15.75ZM12.75 14.25H14.25V8.25H9.75V14.25H11.25V9.75H12.75V14.25ZM12.75 6.75V3.75H3.75V14.25H8.25V6.75H12.75ZM5.25 8.25H6.75V9.75H5.25V8.25ZM5.25 11.25H6.75V12.75H5.25V11.25ZM5.25 5.25H6.75V6.75H5.25V5.25Z"
                        fill="#565656"
                      />
                    </svg>
                    <span className="ms-2"> {data.name}</span>
                  </h4>{" "}
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        stroke="#0DAF00"
                      />
                      <circle cx="8" cy="8" r="4" fill="#0DAF00" />
                    </svg>
                  </span>
                </li>
                <li>
                  <h4 className="location_name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.0625 6.74908C14.0649 7.83382 13.7164 8.89024 13.0691 9.7607L9 15.1866L4.93088 9.7607C4.45444 9.11702 4.13751 8.3695 4.00611 7.57953C3.87471 6.78957 3.9326 5.9797 4.175 5.21645C4.41741 4.4532 4.83743 3.75835 5.40056 3.18896C5.96369 2.61958 6.65386 2.19191 7.41439 1.94109C8.17491 1.69027 8.98409 1.62345 9.77546 1.74611C10.5668 1.86878 11.3178 2.17744 11.9667 2.64673C12.6156 3.11602 13.1439 3.73256 13.5083 4.44571C13.8726 5.15885 14.0625 5.94826 14.0625 6.74908ZM15.75 6.74908C15.75 8.25658 15.2561 9.64708 14.4225 10.7698L10.0541 16.5928L9 17.9991L7.94475 16.5928L3.5775 10.7698C2.94152 9.91193 2.51817 8.91538 2.34223 7.86205C2.1663 6.80872 2.24279 5.72868 2.56544 4.71066C2.88808 3.69265 3.44767 2.76571 4.19822 2.00602C4.94876 1.24633 5.86885 0.675557 6.88289 0.340607C7.89692 0.00565748 8.97596 -0.0839128 10.0313 0.0792556C11.0867 0.242424 12.0883 0.653675 12.9539 1.27922C13.8194 1.90476 14.5242 2.72674 15.0102 3.67762C15.4963 4.62851 15.7499 5.68115 15.75 6.74908ZM9 8.99908C9.59674 8.99908 10.169 8.76202 10.591 8.34007C11.0129 7.91811 11.25 7.34581 11.25 6.74908C11.25 6.15234 11.0129 5.58004 10.591 5.15809C10.169 4.73613 9.59674 4.49908 9 4.49908C8.40326 4.49908 7.83097 4.73613 7.40901 5.15809C6.98705 5.58004 6.75 6.15234 6.75 6.74908C6.75 7.34581 6.98705 7.91811 7.40901 8.34007C7.83097 8.76202 8.40326 8.99908 9 8.99908Z"
                        fill="#565656"
                      />
                    </svg>
                    <span className="ms-2 "> {data.address}</span>
                  </h4>{" "}
                </li>
              </ul>
            </div>
            <div className="right_sec">
              <div className="box">
                <span className="rating">
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
                  <span className="rating_count">{data.ratingCount}</span>
                </span>
                <hr className="hr" />
                <span className="total_rating">
                  <span>{data.tatingTotal}</span>+ratings
                </span>
              </div>
            </div>
          </Card.Text>
          <div className="card_bottom d-flex align-items-center justify-content-between">
            <div className="btn_sec">
              <button className="btn" onClick={data.food}>
                {data.foodBtnText}
              </button>
              <button className="btn ms-2" onClick={data.wifiAccess}>
                {data.wifitnnText}
              </button>
            </div>
            <div className="available_beds">
              <p className="mb-0">
                <span>{data.available_beds}</span> Beds Available
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;