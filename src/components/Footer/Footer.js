import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Stack } from "react-bootstrap";
import logo from ".././../assets/images/f_logo.png";
import fb from ".././../assets/images/fb.svg";
import instagram from ".././../assets/images/instagram.svg";
import twitter from ".././../assets/images/twitter.svg";
import linkedin from ".././../assets/images/linkedin.svg";

// import {
//   FOOTER_COL1_MENU,
//   FOOTER_COL2_MENU,
//   FOOTER_COL3_MENU,
//   FOOTER_BOTTOM_LINKS,
//   FOOTER_SOCIAL_LINKS,
// } from "../../utils/constant";
import "./Footer.css";
import Login from "../../pages/login/Login";

const Footer = () => {
  const [addClass, setAddClass] = useState(true);

  const changeColor = () => {
    setAddClass(!addClass);
  };

  const FOOTER_COL1_MENU = [
    { name: "Home", path: "home" },
    { name: "About", path: "About" },
    { name: "For PG Owners", path: "#" },
    { name: "Contact", path: "Contact" },
    { name: "Privacy Policy", path: "privacy-policy" },
  ];

  const FOOTER_COL2_MENU = [
    { name: "Faq", path: "faq" },
    { name: "Blog", path: "blog" },
    { name: "Terms & conditions", path: "terms-conditions" },
  ];

  const FOOTER_SOCIAL_LINKS = [
    { img: fb, path: "fb" },
    { img: twitter, path: "twitter" },
    { img: instagram, path: "instagram" },
    { img: linkedin, path: "linkedin" },
  ];
  const contactInfo = {
    address:
      "29/2662, 36th cross rd , 28th main , Jaynagar 9th block Bengaluru, Karnataka 560069, India",
    phone: "+91 7899916434",
    email: "support@flaminngo.com",
  };

  return (
    <footer>
      <div className="top_footer">
        <Container>
          <Row>
            <Col sm={6} md={3} className="social_links">
              <img className="img-fluid" src={logo} alt="Footer Logo" />
              <h5
                className={`text_primary fs_15 fw_semibold mt-4 ${addClass}`}
                onClick={changeColor}
              >
                {" "}
                Get In Touch
              </h5>

              <ul>
                {Children.toArray(
                  FOOTER_SOCIAL_LINKS.map((el) => (
                    <li>
                      <Link className="fs_15 fw_light" to={el.path}>
                        <img src={el.img} />
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <h5 className="text_primary fs_15 fw_semibold">Quick Link</h5>
              <ul>
                {Children.toArray(
                  FOOTER_COL1_MENU.map((el) => (
                    <li>
                      <Link
                        title={el.name}
                        className="fs_15 fw_light"
                        to={el.path}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <h5 className="text_primary fs_15 fw_semibold"></h5>
              <ul>
                {Children.toArray(
                  FOOTER_COL2_MENU.map((el) => (
                    <li>
                      <Link
                        title={el.name}
                        className="fs_15 fw_light"
                        to={el.path}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <h5 className="text_primary fs_15 fw_semibold">Contact Info</h5>
              <ul>
                <li>{contactInfo?.address}</li>
                <li>{contactInfo?.phone}</li>
                <li>{contactInfo?.email}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg_primary bottom_footer">
        <Container>
          <p className="mb-0 text-center">
            Copyright © 2023 <b>Flaminngo</b> All rights reserved.
          </p>
        </Container>
      </div>
      <div
        className="modal fade login_popup"
        id="login"
        tabindex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 p-0">
              <span className="close" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9997 10.5867L16.9497 5.63672L18.3637 7.05072L13.4137 12.0007L18.3637 16.9507L16.9487 18.3647L11.9987 13.4147L7.04974 18.3647L5.63574 16.9497L10.5857 11.9997L5.63574 7.04972L7.04974 5.63772L11.9997 10.5867Z"
                    fill="#292D32"
                  />
                </svg>
              </span>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
