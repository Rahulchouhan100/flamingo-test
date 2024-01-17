import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CheckBox from "../../components/common/ui/checkbox/CheckBox";
import MultiRangeSlider from "../../components/common/ui/multiRangeSlider/MultiRangeSlider";
import Redio from "../../components/common/ui/redio/Redio";
import ProductCard from "../../components/productCard/ProductCard";
import hotel1 from "../../assets/images/aarya_hostel.png";
import "./hostelPg.css";

const HostelPg = () => {
  const options = [
    { value: "", text: "Select Location" },
    { value: "Jaipur", text: "Jaipur " },
    { value: "Alwar", text: "Alwar " },
    { value: "Ajamer", text: "Ajamer " },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState();
  const [accessibilityFeatures, setAccessibilityFeatures] = useState([]);

  const handleChange = (event) => {
    setSelected(event.target.value);

    if (event.target.checked) {
      setAccessibilityFeatures([...accessibilityFeatures, event.target.value]);
    } else {
      let newItem = accessibilityFeatures.filter((item) => {
        if (item !== event.target.value) {
          return item;
        }
      });

      setAccessibilityFeatures(newItem);
    }
  };

  console.log(accessibilityFeatures, "AccessibilityFeatures ar ray");
  const genderList = [
    { name: "gender", value: "male" },
    { name: "gender", value: "female" },
  ];
  const Occupation = [
    { name: "Occupation", value: "Employee" },
    { name: "Occupation", value: "Student" },
    { name: "Occupation", value: "Other" },
  ];

  const BookingType = [
    { name: "BookingType", value: "Daily" },
    { name: "BookingType", value: "Monthly" },
  ];
  const RoomType = [
    { name: "RoomType", value: "Ac" },
    { name: "RoomType", value: "Non-Ac" },
  ];
  const Sharing = [
    { name: "Sharing", value: "Single Sharing" },
    { name: "Sharing", value: "Double Sharing" },
    { name: "Sharing", value: "Triple Sharing" },
  ];

  const AccessibilityFeatures = [
    { name: "Hot Water", value: "HotWater" },
    { name: "Gym", value: "Gym" },
    { name: "Wi-fi", value: "Wi-fi" },
    { name: "Laundry", value: "Laundry" },
    { name: "All", value: "All" },
  ];
  const favourite = (item) => {
    alert(item);
  };
  const orderFood = (item) => {
    alert(item);
  };
  const wifiAccess = (item) => {
    alert(item);
  };

  const hotelList = [
    {
      id: 1,
      img: hotel1,
      isFavourite: true,
      price: "12000",
      onwards: "Month Onwards",
      favourite: { favourite },
      name: "Aarya Hostel/PG",
      address: "Kapodara, Surat",
      food: { orderFood },
      foodBtnText: "Food",
      wifiAccess: { wifiAccess },
      wifitnnText: "Wi-fi",
      ratingCount: "4.4",
      tatingTotal: "5K",
      available_beds: "10",
    },
    {
      id: 2,
      img: hotel1,
      isFavourite: false,
      price: "12000",
      onwards: "Month Onwards",
      favourite: { favourite },
      name: "Aarya Hostel/PG",
      address: "Kapodara, Surat",
      food: { orderFood },
      foodBtnText: "Food",
      wifiAccess: { wifiAccess },
      wifitnnText: "Wi-fi",
      ratingCount: "4.4",
      tatingTotal: "5K",
      available_beds: "16",
    },
    {
      id: 3,
      img: hotel1,
      isFavourite: false,
      price: "12000",
      onwards: "Month Onwards",
      favourite: { favourite },
      name: "Aarya Hostel/PG",
      address: "Kapodara, Surat",
      food: { orderFood },
      foodBtnText: "Food",
      wifiAccess: { wifiAccess },
      wifitnnText: "Wi-fi",
      ratingCount: "4.4",
      tatingTotal: "5K",
      available_beds: "25",
    },
    {
      id: 4,
      img: hotel1,
      isFavourite: false,
      price: "12000",
      onwards: "Month Onwards",
      favourite: { favourite },
      name: "Aarya Hostel/PG",
      address: "Kapodara, Surat",
      food: { orderFood },
      foodBtnText: "Food",
      wifiAccess: { wifiAccess },
      wifitnnText: "Wi-fi",
      ratingCount: "4.4",
      tatingTotal: "5K",
      available_beds: "08",
    },
    {
      id: 5,
      img: hotel1,
      isFavourite: false,
      price: "12000",
      onwards: "Month Onwards",
      favourite: { favourite },
      name: "Aarya Hostel/PG",
      address: "Kapodara, Surat",
      food: { orderFood },
      foodBtnText: "Food",
      wifiAccess: { wifiAccess },
      wifitnnText: "Wi-fi",
      ratingCount: "4.4",
      tatingTotal: "5K",
      available_beds: "28",
    },
  ];

  return (
    <>
      <section className="hostial_outer py-5">
        <Container>
          <Row>
            <Col md={3} className="left_side_bar mb-4">
              <h4>Filters</h4>
              <div className="card">
                <div className="select_location p-3 mb-3">
                  <span className="location_sec">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99935 9.58463C9.44682 9.58463 8.91691 9.36514 8.52621 8.97444C8.13551 8.58374 7.91602 8.05384 7.91602 7.5013C7.91602 6.94877 8.13551 6.41886 8.52621 6.02816C8.91691 5.63746 9.44682 5.41797 9.99935 5.41797C10.5519 5.41797 11.0818 5.63746 11.4725 6.02816C11.8632 6.41886 12.0827 6.94877 12.0827 7.5013C12.0827 7.77489 12.0288 8.0458 11.9241 8.29856C11.8194 8.55132 11.6659 8.78098 11.4725 8.97444C11.279 9.1679 11.0494 9.32135 10.7966 9.42605C10.5438 9.53075 10.2729 9.58463 9.99935 9.58463ZM9.99935 1.66797C8.45225 1.66797 6.96852 2.28255 5.87456 3.37651C4.7806 4.47047 4.16602 5.95421 4.16602 7.5013C4.16602 11.8763 9.99935 18.3346 9.99935 18.3346C9.99935 18.3346 15.8327 11.8763 15.8327 7.5013C15.8327 5.95421 15.2181 4.47047 14.1241 3.37651C13.0302 2.28255 11.5464 1.66797 9.99935 1.66797Z"
                        fill="#939191"
                      />
                    </svg>
                  </span>
                  <select
                    className="form-select"
                    value={selected}
                    onChange={handleChange}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="redio_sec custom_redio px-3">
                  <label>Gender</label>

                  <div className="redio_outer d-flex">
                    {genderList.map((item) => {
                      return (
                        <>
                          <Redio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr"></hr>

                <div className="redio_sec custom_redio px-3">
                  <label>Occupation</label>

                  <div className="redio_outer d-flex">
                    {Occupation.map((item) => {
                      return (
                        <>
                          <Redio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr"></hr>
                <div className="redio_sec custom_redio px-3">
                  <label>Booking Type</label>

                  <div className="redio_outer d-flex">
                    {BookingType.map((item) => {
                      return (
                        <>
                          <Redio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr"></hr>
                <div className="range_sec custom_redio px-3">
                  <label>Price range</label>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />
                </div>
                <hr className="hr"></hr>

                <div className="redio_sec custom_redio px-3">
                  <label>Room Type</label>

                  <div className="redio_outer d-flex">
                    {RoomType.map((item) => {
                      return (
                        <>
                          <Redio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr"></hr>

                <div className="redio_sec list_full radio_right  custom_redio px-3">
                  <div className="redio_outer d-flex">
                    {Sharing.map((item) => {
                      return (
                        <>
                          <Redio
                            type="radio"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <hr className="hr"></hr>
                <div className="redio_sec list_full check_right  custom_redio px-3">
                  <div className="redio_outer">
                    {AccessibilityFeatures.map((item) => {
                      return (
                        <>
                          <CheckBox
                            type="checkbox"
                            name={item.name}
                            value={item.value}
                            handleChange={handleChange}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={9} className="content_section mb-4">
              <Row className="mb-4">
                <Col sm={6} className="mb-3 mb-sm-0">
                  <div class="input-group search_form">
                    <input
                      class="form-control border-end-0 border rounded-pill"
                      type="search"
                      value="search"
                      id="example-search-input"
                    />
                    <span class="input-group-append">
                      <button
                        class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </Col>
                <Col sm={6} className="mb-3 mb-sm-0">
                  <div className="select_form">
                    <label>Sort by:</label>
                    <Form.Select
                      aria-label="Default select example"
                      style={{ maxWidth: "200px" }}
                    >
                      <option> Distance</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <p className="product_show">
                    {hotelList.length} All stay Types in Surat
                  </p>
                </Col>
                {hotelList.map((item) => {
                  return (
                    <Col md={6} sm={6} lg={4} className="mb-4">
                      <ProductCard data={item} />{" "}
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HostelPg;
