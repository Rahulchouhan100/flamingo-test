import React from "react";
import "./contactUs.css";

const ContactCard = ({ img, heading, content }) => {
  return (
    <>
      <div className="contact_card">
        <img src={img} />
        <h5>{heading}</h5>
        <p>{content}</p>
      </div>
    </>
  );
};

export default ContactCard;
