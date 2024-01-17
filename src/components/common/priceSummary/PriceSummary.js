import React from "react";
import { Card } from "react-bootstrap";
import "./priceSummary.css";

const PriceSummary = () => {
  return (
    <>
      <section className="PriceSummary mb-3">
        <Card className="border-0">
          <h3 className="fs_25 color_10 p-3">Price Summary</h3>
          <ul className="p-3 pb-0 mb-0">
            <li className="d-flex justify-content-between fs_23 color_56 mb-3">
              <span>Base Price ( 1 room x 1 Months )</span>
              <span className="fs_23 color_56">₹ 12,000</span>
            </li>
            <li className="d-flex justify-content-between fs_23 color_56 mb-3">
              <span>Total Discount</span>
              <span className="fs_23 green">-₹ 8,000</span>
            </li>
          </ul>
          <div className="px-3 border_b1">
            <p className="coupon_apply green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#2274E0" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8467 4.17326C10.9449 4.28434 11 4.43492 11 4.59192C11 4.74891 10.9449 4.89949 10.8467 5.01057L6.58539 9.82668C6.53619 9.88223 6.47771 9.92616 6.41335 9.95591C6.34899 9.98566 6.28003 10.0006 6.2105 9.99998C6.14096 9.99932 6.07224 9.98303 6.00833 9.95205C5.94442 9.92108 5.8866 9.87605 5.83824 9.81957L4.15874 7.85742C4.10841 7.80211 4.06843 7.73593 4.04116 7.66282C4.01389 7.58971 3.99989 7.51115 4 7.43181C4.00011 7.35247 4.01431 7.27396 4.04178 7.20094C4.06924 7.12792 4.1094 7.06188 4.15988 7.00674C4.21035 6.95159 4.27012 6.90847 4.33562 6.87993C4.40112 6.85139 4.47103 6.83801 4.54119 6.84058C4.61136 6.84315 4.68035 6.86163 4.74408 6.89491C4.80781 6.9282 4.86497 6.97561 4.91217 7.03433L6.22125 8.56282L10.1058 4.17326C10.2041 4.06232 10.3374 4 10.4763 4C10.6152 4 10.7484 4.06232 10.8467 4.17326Z"
                  fill="white"
                />
              </svg>
              <span className="ps-2"> Flaminngo applied</span>
            </p>
          </div>
          <ul className="p-3 pb-0 border_b1 mb-0">
            <li className="d-flex justify-content-between fs_23 color_56 mb-3">
              <span>Price after discount</span>
              <span className="fs_23 color_56">₹ 4,000</span>
            </li>
            <li className="d-flex justify-content-between fs_23 color_56 mb-3">
              <span>Taxes & Service Fees</span>
              <span className="fs_23 color_56">₹ 500</span>
            </li>
          </ul>
          <div className="card_footer">
            <ul className="p-3 pb-0 mb-0">
              <li className="d-flex justify-content-between fs_23 color_10 fw_600 mb-3">
                <span>Total Amount to be paid</span>
                <span className="fs_23 color_10 fw_600">₹ 4,500</span>
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </>
  );
};

export default PriceSummary;
