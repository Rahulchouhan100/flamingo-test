import { Col, Container, Row } from "react-bootstrap";
import "./aboutUsSection.css";
const AboutUsSection = ({ aboutUs }) => {
  return (
    <>
      <section className="about_us_section py-5">
        <Container>
          <h4 className="text-center mb-4">About Us</h4>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <div className="content">
                <p>{aboutUs.para}</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="img_sec">
                <div className="img1 ">
                  <img className="img-fluid" src={aboutUs.img1} />
                </div>
                <div className="img2">
                  <img className="img-fluid" src={aboutUs.img2} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUsSection;
