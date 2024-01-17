import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtpInput from "react-otp-input";
import login_img from "../../assets/images/login_img.png";
import logo from "../../assets/images/logo.png";
import googleImg from "../../assets/images/google.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  let navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [optVerify, setOptVerify] = useState(false);

  const [sendOtp, setSendOtp] = useState();

  const VerifyOtp = () => {
    console.log(phone, "Phone Number");
    setOptVerify(true);
  };

  const submitOtp = () => {
    if (otp.length == 6) {
      console.log(otp, "otp sending please wait");

      if (otp === "123456") {
        navigate("/");
      }
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("phone")} />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form> */}

      <section className="LoginSec">
        <Container>
          <Row>
            <Col md={6}>
              <div className="img_sec">
                <img className="img-fluid" src={login_img} alt="login image" />
              </div>
            </Col>
            <Col md={6}>
              {/* <form onSubmit={handleSubmit((data) => console.log(data))}> */}
              <div className="login_area h-100">
                <img src={logo} className="img-fluid logo" alt="logo" />

                {optVerify ? (
                  <div className="otp_sec text-center">
                    <h2>
                      <span className="back_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M10.3678 6.42578L3.79199 13.0016L10.3678 19.5774"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.2081 13H3.97559"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Enter verification code
                    </h2>
                    <p>
                      Enter The OTP Send To <span>+9099387800</span>
                    </p>
                    <div className="otp_input">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                      />
                      <div className="p-3 ">
                        <p className="text-start">
                          Didn’t receive code? <Link to="#">Resend</Link>
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="submit_btn mt-4"
                        onClick={submitOtp}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="form_sec">
                    <h2>Login or Create an account</h2>
                    <h4>Welcome!</h4>
                    <p>Please enter your number to continue</p>
                    <PhoneInput
                      // {...register("phone")}
                      country={"in"}
                      value={phone}
                      onChange={(number) => setPhone(number)}
                    />

                    {/* <input type="text" {...register("phone")} /> */}
                    <div className="or mt-3">
                      <span>or</span>
                    </div>
                    <div className="google_login">
                      <button>
                        <img src={googleImg} /> Log In with google
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="submit_btn mt-4"
                      onClick={() => VerifyOtp()}
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              {/* </form> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
