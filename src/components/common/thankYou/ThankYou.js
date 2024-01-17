import React from "react";
import { Container } from "react-bootstrap";
import ContactCard from "../../home/contactUs/ContactCard";

const ThankYou = ({ title, message, description, btnText, isbtn }) => {
  return (
    <>
      <section className="thank_you py-5 text-center">
        <Container>
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle cx="20" cy="20" r="20" fill="#1FAF38" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.6277 13.4043C28.8661 13.6635 29 14.0148 29 14.3811C29 14.7475 28.8661 15.0988 28.6277 15.358L18.2788 26.5956C18.1593 26.7252 18.0173 26.8277 17.861 26.8971C17.7047 26.9665 17.5372 27.0015 17.3684 27C17.1995 26.9984 17.0326 26.9604 16.8774 26.8881C16.7222 26.8159 16.5817 26.7108 16.4643 26.579L12.3855 22.0007C12.2633 21.8716 12.1662 21.7172 12.1 21.5466C12.0337 21.376 11.9997 21.1927 12 21.0076C12.0003 20.8224 12.0348 20.6392 12.1015 20.4689C12.1682 20.2985 12.2657 20.1444 12.3883 20.0157C12.5109 19.8871 12.656 19.7864 12.8151 19.7198C12.9742 19.6532 13.1439 19.622 13.3143 19.628C13.4847 19.634 13.6523 19.6771 13.807 19.7548C13.9618 19.8325 14.1006 19.9431 14.2153 20.0801L17.3945 23.6466L26.8285 13.4043C27.0672 13.1454 27.3907 13 27.7281 13C28.0654 13 28.389 13.1454 28.6277 13.4043Z"
                fill="white"
              />
            </svg>
            <span className="fs_25 green fw_500 ms-3">{title}</span>
          </h3>
          <h2 className="fs_22 color_10 mb-3">{message}</h2>
          <p className="fs_20 color_93 mb-3">{description}</p>

          {isbtn ? (
            <button className="btn btn-primary rounded-pill px-4">
              {btnText}
            </button>
          ) : (
            ""
          )}
        </Container>
      </section>
    </>
  );
};

export default ThankYou;
