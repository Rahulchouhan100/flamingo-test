import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import owner from "../../../assets/images/owner.svg";
import "./commonDetailsSections.css";

const CommonDetailsSections = () => {
  const [showDetails, setShowDetails] = useState(false);

  const ShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <section className="common_details_section mt-4">
      <Card className=" py-3">
        <div className="left_sec border_right">
          <div className="common_details border_bottom p-4">
            <h4 className="heading">Common Details</h4>
            <ul className="p-0 mt-4">
              <li>
                <span>Property Type</span>
                <span className="value">Hostels/PG</span>
              </li>
              <li>
                <span>Property Managed By</span>
                <span className="value">Landlord</span>
              </li>
              <li>
                <span>Total Capacity</span>
                <span className="value">5 Rooms</span>
              </li>
            </ul>
          </div>

          <div className="food_available  border_bottom p-4">
            <h4 className="heading">Food Available</h4>

            <ul className="mt-3 mb-0">
              <li>
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M24.75 10.4062C24.4453 10.4062 24.1816 10.2949 23.959 10.0723C23.7363 9.84961 23.625 9.58594 23.625 9.28125C23.625 8.68359 23.7363 8.10938 23.959 7.55859C24.1816 7.00781 24.5098 6.52148 24.9434 6.09961L26.332 4.69336C26.7773 4.24805 27 3.71484 27 3.09375C27 2.78906 27.1113 2.52539 27.334 2.30273C27.5566 2.08008 27.8203 1.96875 28.125 1.96875C28.4297 1.96875 28.6934 2.08008 28.916 2.30273C29.1387 2.52539 29.25 2.78906 29.25 3.09375C29.25 3.69141 29.1387 4.26562 28.916 4.81641C28.6934 5.36719 28.3652 5.85352 27.9316 6.27539L26.543 7.68164C26.0977 8.12695 25.875 8.66016 25.875 9.28125C25.875 9.58594 25.7637 9.84961 25.541 10.0723C25.3184 10.2949 25.0547 10.4062 24.75 10.4062ZM18 10.4062C17.6953 10.4062 17.4316 10.2949 17.209 10.0723C16.9863 9.84961 16.875 9.58594 16.875 9.28125C16.875 8.68359 16.9863 8.10938 17.209 7.55859C17.4316 7.00781 17.7598 6.52148 18.1934 6.09961L19.582 4.69336C20.0273 4.24805 20.25 3.71484 20.25 3.09375C20.25 2.78906 20.3613 2.52539 20.584 2.30273C20.8066 2.08008 21.0703 1.96875 21.375 1.96875C21.6797 1.96875 21.9434 2.08008 22.166 2.30273C22.3887 2.52539 22.5 2.78906 22.5 3.09375C22.5 3.69141 22.3887 4.26562 22.166 4.81641C21.9434 5.36719 21.6152 5.85352 21.1816 6.27539L19.793 7.68164C19.3477 8.12695 19.125 8.66016 19.125 9.28125C19.125 9.58594 19.0137 9.84961 18.791 10.0723C18.5684 10.2949 18.3047 10.4062 18 10.4062ZM32.625 13.5C33.0938 13.5 33.5332 13.5879 33.9434 13.7637C34.3535 13.9395 34.7109 14.1797 35.0156 14.4844C35.3203 14.7891 35.5605 15.1465 35.7363 15.5566C35.9121 15.9668 36 16.4062 36 16.875V23.625C36 24.0938 35.9121 24.5332 35.7363 24.9434C35.5605 25.3535 35.3203 25.7109 35.0156 26.0156C34.7109 26.3203 34.3535 26.5605 33.9434 26.7363C33.5332 26.9121 33.0938 27 32.625 27H31.623C31.5996 27.082 31.582 27.1582 31.5703 27.2285C31.5586 27.2988 31.5352 27.3691 31.5 27.4395V28.125C31.5 28.8984 31.3535 29.625 31.0605 30.3047C30.7676 30.9844 30.3633 31.582 29.8477 32.0977C29.332 32.6133 28.7344 33.0176 28.0547 33.3105C27.375 33.6035 26.6484 33.75 25.875 33.75H19.125C18.2109 33.75 17.3672 33.5449 16.5938 33.1348C15.8203 32.7246 15.1758 32.1797 14.6602 31.5H5.87109C5.09766 31.5 4.37109 31.3535 3.69141 31.0605C3.01172 30.7676 2.41406 30.3691 1.89844 29.8652C1.38281 29.3613 0.978516 28.7637 0.685547 28.0723C0.392578 27.3809 0.246094 26.6484 0.246094 25.875V24.75H4.74609C4.74609 23.8242 4.92188 22.9512 5.27344 22.1309C5.625 21.3105 6.11133 20.5957 6.73242 19.9863C7.35352 19.377 8.06836 18.8906 8.87695 18.5273C9.68555 18.1641 10.5586 17.9883 11.4961 18C11.8477 18 12.1875 18.0293 12.5156 18.0879C12.8438 18.1465 13.1719 18.2285 13.5 18.334V11.25H31.5V13.5H32.625ZM11.4961 20.25C10.875 20.25 10.2949 20.3672 9.75586 20.6016C9.2168 20.8359 8.73633 21.1582 8.31445 21.5684C7.89258 21.9785 7.57031 22.4531 7.34766 22.9922C7.125 23.5312 7.00781 24.1172 6.99609 24.75H13.5V20.7422C13.1953 20.5898 12.8789 20.4727 12.5508 20.3906C12.2227 20.3086 11.8711 20.2617 11.4961 20.25ZM5.87109 29.25H13.623C13.541 28.9102 13.5 28.5352 13.5 28.125V27H2.68945C2.80664 27.3281 2.9707 27.627 3.18164 27.8965C3.39258 28.166 3.63281 28.4062 3.90234 28.6172C4.17188 28.8281 4.47656 28.9805 4.81641 29.0742C5.15625 29.168 5.50781 29.2266 5.87109 29.25ZM14.0098 30.4277V30.4453L14.0273 30.4805V30.4629L14.0098 30.4277ZM29.25 28.125V13.5H15.75V28.125C15.75 28.5938 15.8379 29.0332 16.0137 29.4434C16.1895 29.8535 16.4297 30.2109 16.7344 30.5156C17.0391 30.8203 17.3965 31.0605 17.8066 31.2363C18.2168 31.4121 18.6562 31.5 19.125 31.5H25.875C26.3438 31.5 26.7832 31.4121 27.1934 31.2363C27.6035 31.0605 27.9609 30.8203 28.2656 30.5156C28.5703 30.2109 28.8105 29.8535 28.9863 29.4434C29.1621 29.0332 29.25 28.5938 29.25 28.125ZM33.75 23.625V16.875C33.75 16.5703 33.6387 16.3066 33.416 16.084C33.1934 15.8613 32.9297 15.75 32.625 15.75H31.5V24.75H32.625C32.9297 24.75 33.1934 24.6387 33.416 24.416C33.6387 24.1934 33.75 23.9297 33.75 23.625Z"
                      fill="#565656"
                    />
                  </svg>
                </div>
                <span>Breakfast</span>
              </li>
              <li>
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M6 31.5C5.175 31.5 4.4685 31.206 3.8805 30.618C3.2925 30.03 2.999 29.324 3 28.5V24H33V28.5C33 29.325 32.706 30.0315 32.118 30.6195C31.53 31.2075 30.824 31.501 30 31.5H6ZM6 27V28.5H30V27H6ZM18 20.25C17.1 20.25 16.3875 20.5 15.8625 21C15.3375 21.5 14.375 21.75 12.975 21.75C11.575 21.75 10.625 21.5 10.125 21C9.625 20.5 8.925 20.25 8.025 20.25C7.125 20.25 6.4125 20.5 5.8875 21C5.3625 21.5 4.4 21.75 3 21.75V18.75C3.9 18.75 4.6125 18.5 5.1375 18C5.6625 17.5 6.625 17.25 8.025 17.25C9.425 17.25 10.375 17.5 10.875 18C11.375 18.5 12.075 18.75 12.975 18.75C13.875 18.75 14.5875 18.5 15.1125 18C15.6375 17.5 16.6 17.25 18 17.25C19.4 17.25 20.3625 17.5 20.8875 18C21.4125 18.5 22.125 18.75 23.025 18.75C23.925 18.75 24.625 18.5 25.125 18C25.625 17.5 26.575 17.25 27.975 17.25C29.375 17.25 30.3625 17.5 30.9375 18C31.5125 18.5 32.2 18.75 33 18.75V21.75C31.6 21.75 30.6625 21.5 30.1875 21C29.7125 20.5 29.025 20.25 28.125 20.25C27.225 20.25 26.5 20.5 25.95 21C25.4 21.5 24.425 21.75 23.025 21.75C21.625 21.75 20.6625 21.5 20.1375 21C19.6125 20.5 18.9 20.25 18 20.25ZM3 15V13.5C3 10.625 4.3565 8.406 7.0695 6.843C9.7825 5.28 13.426 4.499 18 4.5C22.575 4.5 26.219 5.2815 28.932 6.8445C31.645 8.4075 33.001 10.626 33 13.5V15H3ZM18 7.5C14.9 7.5 12.306 7.8875 10.218 8.6625C8.13 9.4375 6.799 10.55 6.225 12H29.775C29.2 10.55 27.8685 9.4375 25.7805 8.6625C23.6925 7.8875 21.099 7.5 18 7.5Z"
                      fill="#565656"
                    />
                  </svg>
                </div>
                <span>Lunch</span>
              </li>
              <li>
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M32.625 24.1919C32.625 16.5062 26.6657 10.1862 19.125 9.60982V5.625H16.875V9.60982C9.33434 10.1864 3.375 16.5062 3.375 24.1919V26.5198H32.625V24.1919ZM30.375 24.2698H5.625V24.1919C5.625 17.3684 11.1764 11.8169 18 11.8169C24.8236 11.8169 30.375 17.3683 30.375 24.1919V24.2698ZM1.125 29.25H34.875V31.5H1.125V29.25Z"
                      fill="#565656"
                    />
                  </svg>
                </div>
                <span>Dinner</span>
              </li>
            </ul>
          </div>

          <div className="rules p-4">
            <h4 className="heading">Rules</h4>
            <ul className="p-0">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Available For Students
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Non Veg Not Allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Opposite Gender Not Allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Visitors Allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Guardian is not allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Drinking is not allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Smoking is not allowed
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.8225 13.5508L15.375 8.99828L10.8225 4.44578"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.62457 9L15.2471 9"
                    stroke="#6ABD55"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Last Entry till 11:00 pm
              </li>
            </ul>
          </div>
        </div>
        <div className="right_sec">
          <div className="sharing_details p-4">
            <ul className="p-0">
              <li>
                <div className="sharing_inner">
                  <span className="color_10">Single Sharing</span>
                  <span>
                    <span>
                      <span className="colorRed">₹ 8,000</span>/Month
                    </span>
                    <span className="icon ms-3" onClick={ShowDetails}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M14.1096 6.33984L9.49132 10.9582C8.9459 11.5036 8.0534 11.5036 7.50798 10.9582L2.88965 6.33984"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                {showDetails ? (
                  <div className="sharing_inner_box">
                    <div className="sharing_header">
                      <span>Double Sharing</span>
                      <span onClick={ShowDetails} className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="8"
                          viewBox="0 0 13 8"
                          fill="none"
                        >
                          <path
                            d="M0.889374 6.66016L5.50771 2.04182C6.05312 1.49641 6.94562 1.49641 7.49104 2.04182L12.1094 6.66016"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="inner p-3">
                      <h6>
                        Amount per day: <span className="colorRed">₹ 2,00</span>
                        / day
                      </h6>
                      <h3>One time security deposit : ₹ 300</h3>
                      <h2 className="heading">Additional Facilities</h2>
                      <ul className="p-0">
                        <li>AC</li>
                        <li>Bed</li>
                        <li>Chair</li>
                        <li>Table</li>
                        <li>Fridge</li>
                        <li>Cooler</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>

          <div className="location px-4">
            <h4 className="heading">Location</h4>
            <p>Dhara society, Kapodara - Surat</p>
          </div>
          <button className="btn btn-default mt-3">View On Map</button>
          <div className="border_bottom mt-4"></div>

          <div className="conatct_owner  py-3 px-4">
            <div className="contact_header">
              <h4>Contact Owner</h4>
            </div>
            <div className="conatct_owner_inner p-3">
              <h3>Contacting for Shiv PG</h3>
              <div className="d-flex align-items-center">
                <div className="img_sec me-3">
                  <img src={owner} />
                </div>
                <div className="">
                  <h4 className="name fs_15 color_10">Keval Vasoya</h4>
                  <h4 className="post fs_14 color_56">Landlord</h4>
                  <h4 className="number fs_14 colorRed">9609XXXX90</h4>
                </div>
              </div>
              <div className="btns_outer mt-3">
                <button className="colorRed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M6.44616 8.72214L5.36699 9.8013C5.13949 10.0288 4.77783 10.0288 4.54449 9.80713C4.48033 9.74297 4.41616 9.68464 4.35199 9.62047C3.75116 9.0138 3.20866 8.37797 2.72449 7.71297C2.24616 7.04797 1.86116 6.38297 1.58116 5.7238C1.30699 5.0588 1.16699 4.42297 1.16699 3.8163C1.16699 3.41964 1.23699 3.04047 1.37699 2.69047C1.51699 2.33464 1.73866 2.00797 2.04783 1.7163C2.42116 1.3488 2.82949 1.16797 3.26116 1.16797C3.42449 1.16797 3.58783 1.20297 3.73366 1.27297C3.88533 1.34297 4.01949 1.44797 4.12449 1.59964L5.47783 3.50714C5.58283 3.65297 5.65866 3.78714 5.71116 3.91547C5.76366 4.03797 5.79283 4.16047 5.79283 4.2713C5.79283 4.4113 5.75199 4.5513 5.67033 4.68547C5.59449 4.81964 5.48366 4.95964 5.34366 5.09964L4.90033 5.56047C4.83616 5.62464 4.80699 5.70047 4.80699 5.7938C4.80699 5.84047 4.81283 5.8813 4.82449 5.92797C4.84199 5.97464 4.85949 6.00963 4.87116 6.04463C4.97616 6.23713 5.15699 6.48797 5.41366 6.7913C5.67616 7.09464 5.95616 7.4038 6.25949 7.71297C6.31783 7.7713 6.38199 7.82964 6.44033 7.88797C6.67366 8.11547 6.67949 8.4888 6.44616 8.72214Z"
                      fill="#ED257D"
                    />
                    <path
                      d="M12.8154 10.6939C12.8154 10.8572 12.7863 11.0264 12.7279 11.1897C12.7104 11.2364 12.6929 11.2831 12.6696 11.3297C12.5704 11.5397 12.4421 11.7381 12.2729 11.9247C11.9871 12.2397 11.6721 12.4672 11.3163 12.6131C11.3104 12.6131 11.3046 12.6189 11.2988 12.6189C10.9546 12.7589 10.5813 12.8347 10.1788 12.8347C9.58378 12.8347 8.94794 12.6947 8.27711 12.4089C7.60628 12.1231 6.93544 11.7381 6.27044 11.2539C6.04294 11.0847 5.81544 10.9156 5.59961 10.7347L7.50711 8.82724C7.67044 8.94974 7.81628 9.04307 7.93878 9.10724C7.96794 9.11891 8.00294 9.13641 8.04378 9.15391C8.09044 9.17141 8.13711 9.17724 8.18961 9.17724C8.28878 9.17724 8.36461 9.14224 8.42878 9.07807L8.87211 8.64057C9.01794 8.49474 9.15794 8.38391 9.29211 8.31391C9.42628 8.23224 9.56044 8.19141 9.70628 8.19141C9.81711 8.19141 9.93378 8.21474 10.0621 8.26724C10.1904 8.31974 10.3246 8.39557 10.4704 8.49474L12.4013 9.86557C12.5529 9.97057 12.6579 10.0931 12.7221 10.2389C12.7804 10.3847 12.8154 10.5306 12.8154 10.6939Z"
                      fill="#ED257D"
                    />
                  </svg>
                  View Phone
                </button>
                <button className="green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M12.8217 6.65739C12.6233 3.27406 9.54917 0.666565 6.00834 1.2499C3.57 1.6524 1.61584 3.62989 1.23667 6.06822C1.01501 7.47989 1.30669 8.81572 1.94252 9.91822L1.42335 11.8491C1.30668 12.2866 1.70917 12.6832 2.14083 12.5607L4.04251 12.0357C4.90584 12.5432 5.915 12.8349 6.99417 12.8349C10.2842 12.8349 13.0142 9.93573 12.8217 6.65739ZM9.84668 9.17156C9.79418 9.27656 9.73 9.37573 9.64833 9.46906C9.5025 9.62656 9.34499 9.74323 9.16999 9.81323C8.99499 9.88906 8.80251 9.92406 8.59834 9.92406C8.30084 9.92406 7.98 9.85407 7.6475 9.70823C7.30917 9.5624 6.97669 9.36989 6.64419 9.13072C6.30585 8.88572 5.99084 8.61156 5.68751 8.31406C5.38418 8.01072 5.11583 7.68988 4.87083 7.35738C4.63166 7.02488 4.43917 6.69239 4.29917 6.35989C4.15917 6.02739 4.08918 5.70656 4.08918 5.40323C4.08918 5.2049 4.12418 5.01239 4.19418 4.83739C4.26418 4.65656 4.37502 4.49323 4.53252 4.3474C4.71919 4.16073 4.92334 4.07323 5.13918 4.07323C5.22084 4.07323 5.30249 4.09073 5.37833 4.12573C5.45416 4.16073 5.52418 4.21323 5.57668 4.28906L6.25333 5.24572C6.30583 5.32155 6.34667 5.38572 6.37 5.44989C6.39917 5.51405 6.41084 5.57239 6.41084 5.63072C6.41084 5.70072 6.38751 5.77073 6.34668 5.84073C6.30585 5.91073 6.25333 5.98072 6.18333 6.05072L5.96166 6.28405C5.92666 6.31905 5.91502 6.35406 5.91502 6.40072C5.91502 6.42406 5.92083 6.44739 5.92666 6.47072C5.93833 6.49405 5.94418 6.51156 5.95002 6.52906C6.00252 6.62822 6.09583 6.75072 6.22417 6.90238C6.35833 7.05405 6.49836 7.21155 6.65002 7.36322C6.80752 7.52072 6.95918 7.66072 7.11668 7.79488C7.26835 7.92321 7.39666 8.01073 7.49583 8.06323C7.51333 8.06906 7.53085 8.08071 7.54835 8.08655C7.57168 8.09822 7.59502 8.09823 7.62418 8.09823C7.67668 8.09823 7.71169 8.08073 7.74669 8.04573L7.96833 7.82406C8.04416 7.74823 8.11419 7.69573 8.17836 7.66073C8.24836 7.61989 8.31251 7.59655 8.38835 7.59655C8.44668 7.59655 8.50501 7.60822 8.56918 7.63739C8.63335 7.66655 8.70333 7.70156 8.77333 7.75406L9.74168 8.44239C9.81752 8.49489 9.87 8.55906 9.905 8.62906C9.93417 8.7049 9.95168 8.77489 9.95168 8.85655C9.91668 8.95572 9.89335 9.06656 9.84668 9.17156Z"
                      fill="#6ABD55"
                    />
                  </svg>
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CommonDetailsSections;
