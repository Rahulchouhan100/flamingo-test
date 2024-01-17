import React from "react";
import BannerSection2 from "../../components/home/bannerSection/BannerSection2";
import Services from "../../components/home/services/Services";
import GuestManagement from "../../components/home/guestManagement/GuestManagement";
import AboutUsSection from "../../components/home/aboutUsSection/AboutUsSection";
import pg_banner from ".././../assets/images/pg_banner.png";
import co_living_banner from ".././../assets/images/co_living_banner.png";
import hotels_banner from ".././../assets/images/hotels_banner.png";
import resorts_banner from ".././../assets/images/resorts_banner.png";

import hostel_pg from "../../assets/images/hostel_pg_sm.png";
import coliving from "../../assets/images/coliving_sm.png";
import hotels from "../../assets/images/hotels_sm.png";
import resorts from "../../assets/images/resorts_sm.png";
import guestmanagement from "../../assets/images/guestmanagement.png";

import aboutImg1 from "../../assets/images/about1.png";
import aboutImg2 from "../../assets/images/about2.png";
import services1 from "../../assets/images/service1.png";
import services2 from "../../assets/images/service2.png";
import services3 from "../../assets/images/service3.png";
import services4 from "../../assets/images/service4.png";
import ContactUs from "../../components/home/contactUs/ContactUs";
import location from "../../assets/images/location_icon.svg";
import enquiries from "../../assets/images/enquiries.svg";
import phone from "../../assets/images/phone.svg";
import clock from "../../assets/images/clock.svg";
import BannerSection from "../../components/home/bannerSection/BannerSection";
import addProperty from "../../assets/images/add_property.png";
import RegisterProperty from "../../components/home/registerProperty/RegisterProperty";
import TrendingGetaways from "../../components/home/trendingGetaways/TrendingGetaways";
import tranding1 from "../../assets/images/tranding1.png";
import tranding1_1 from "../../assets/images/tranding1_1.png";
import tranding1_2 from "../../assets/images/tranding1_2.png";

import tranding2 from "../../assets/images/tranding2.png";
import tranding2_1 from "../../assets/images/tranding2_1.png";
import tranding2_2 from "../../assets/images/tranding2_2.png";

import tranding3 from "../../assets/images/tranding1.png";
import tranding3_1 from "../../assets/images/tranding3_1.png";
import tranding3_2 from "../../assets/images/tranding3_2.png";
import OffersForYou from "../../components/home/offersForYou/OffersForYou";
import BenefitsFlaminngo from "../../components/home/benefitsFlaminngo/BenefitsFlaminngo";
import OurCustomers from "../../components/home/ourCustomers/OurCustomers";

const Home = () => {
  // const data = [hostel_pg, coliving, hotels, resorts];
  const data = [
    { img: hostel_pg, url: "HostelPG", urlTitle: "Hostel/PG" },
    { img: coliving, url: "Coliving", urlTitle: "Co-living" },
    { img: hotels, url: "Hotels", urlTitle: "Hotels" },
    { img: resorts, url: "Resorts", urlTitle: "Resorts" },
  ];
  const sliderData = [
    {
      img: pg_banner,
      iconTitle: "Hostel/PG",
      btnUrl: "HostelPG",
      heading: "Affordable and Comfortable",
      content: "Paying Guest ",
      content2: " Hostel Stays",
    },
    {
      img: co_living_banner,
      iconTitle: "Co-living",
      btnUrl: "Coliving",
      heading: "Affordable and Comfortable",
      content: "Co-living",
    },
    {
      img: hotels_banner,
      iconTitle: "Hotels",
      btnUrl: "Hotels",
      heading: "Affordable and Comfortable",
      content: "Hotels",
    },
    {
      img: resorts_banner,
      iconTitle: "Resorts",
      btnUrl: "Resorts",
      heading: "Affordable and Comfortable",
      content: "Resorts",
    },
  ];

  const guestManagement = {
    img: guestmanagement,
    heading: "How it Streamlines Paying Guest Management",
    paran:
      "Managing a hostel or paying guest (PG) facility can be a daunting task, with the overhead burden of hostel management and tenants constantly coming and going. Fortunately, with the advent of modern technology, hostel, and PG management software have become much easier to handle.",
    paran2:
      "One such solution is Flaminngo, a cloud-based paying guest & property management system that offers a range of features and modules to streamline guest and hostel management.",
  };

  const aboutUs = {
    heading: "About Us",
    para: "Our aim is to provide housing solutions to single women, students, travellers who are away from their home for either studies or for work. We, dummy company, are reputed for providing paying guests, multiple hostel accommodation facilities on daily and monthly basis. Located at, area in city state, we make sure to avail the utmost comfort by providing spacious rooms with all the amenities. We strive to serve our visitors with the best of our ability and facilities for their peaceful and safe stay at our space.",
    img1: aboutImg1,
    img2: aboutImg2,
  };

  const ServicesData = [
    {
      img: services1,
      heading: "Fully Furnished Kitchen",
      content:
        "We Serve our Client’s diverse requirement of optimum fully furnished modular kitchen.",
    },
    {
      img: services2,
      heading: "Spacious Rooms",
      content:
        "We Provide Spacious rooms with comfortable beds and personal wardrobes for your storage.",
    },
    {
      img: services3,
      heading: "Hot/Cold Shower",
      content:
        "You can adjust the hot or cold water temperatures in the bathroom as per your preference.",
    },
    {
      img: services4,
      heading: "Security",
      content:
        "We have reliable wardens & Security guards who will service 24*7 for women’s safety.",
    },
  ];

  const ContactUsData = [
    {
      img: location,
      heading: "Our Office Address",
      content: "A-101 Kalakunj park, kapodara, surat Gujarat 395006",
    },
    {
      img: enquiries,
      heading: "General Enquiries",
      content: "Websupport@flaminngo.com ",
    },
    {
      img: phone,
      heading: "Call Us",
      content: "+919873465810",
    },
    {
      img: clock,
      heading: "Our Timings",
      content: "Mon - Sun: 10:00 AM- 07:00PM",
    },
  ];

  const addPropertyData = {
    addProperty,
  };
  const trandigData = [
    {
      img1: tranding1,
      img2: tranding1_1,
      img3: tranding1_2,
      heading: "Best Hostels In Surat",
      content: "1058 properties available",
    },
    {
      img1: tranding2,
      img2: tranding2_1,
      img3: tranding2_2,
      heading: "Couple friendly hotels in Ooty",
      content: "550 properties available",
    },
    {
      img1: tranding3,
      img2: tranding3_1,
      img3: tranding3_2,
      heading: "Moon view hotels in Manali",
      content: "1020 properties available",
    },
  ];
  return (
    <>
      {/* <BannerSection2 heroIcon={data} sliderData={sliderData} /> */}
      <BannerSection heroIcon={data} sliderData={sliderData} />
      <RegisterProperty addPropertyData={addPropertyData} />
      <GuestManagement guestManagement={guestManagement} />
      <TrendingGetaways data={trandigData} />
      {/* <AboutUsSection aboutUs={aboutUs} /> */}
      <Services ServicesData={ServicesData} />
      <OffersForYou />
      <BenefitsFlaminngo />
      <OurCustomers />
      <ContactUs ContactUsData={ContactUsData} />
    </>
  );
};

export default Home;
