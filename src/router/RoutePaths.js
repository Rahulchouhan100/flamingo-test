// import Home from "../pages/public/Home/Home";
// import About from "../pages/public/AboutUs/AboutUs";
// import AccuRateSustainability from "./../pages/public/AccurateSustainability/AccuRateSustainability";

import All from "../components/all/All";
import PrivacyPolicy from "../components/privacyPolicy/PrivacyPolicy";
import TermsConditions from "../components/termsConditions/TermsConditions";
import Home from "../pages/home/Home";
import HostelPg from "../pages/hostelPg/HostelPg";
import HostelPGSingle from "../pages/hostelPGSingle/HostelPGSingle";
import Login from "../pages/login/Login";

// import ContactUs from "../pages/public/ContactUs/ContactUs";

export const routes = [
  {
    notLazy: true,
    path: "/",
    element: Home,
    role: "public",
    name: "Home",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "hostel-pg",
    element: HostelPg,
    role: "public",
    name: "Home",
    subRouting: false,
  },

  {
    notLazy: true,
    path: "login",
    element: Login,
    role: "public",
    name: "Login",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "hostel-pg-single",
    element: HostelPGSingle,
    role: "public",
    name: "Login",
    subRouting: false,
  },

  {
    notLazy: true,
    path: "all",
    element: All,
    role: "public",
    name: "Login",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "privacy-policy",
    element: PrivacyPolicy,
    role: "public",
    name: "privacy-policy",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "terms-conditions",
    element: TermsConditions,
    role: "public",
    name: "Login",
    subRouting: false,
  },

  //   {
  //     notLazy: true,
  //     path: "/templates/custom-template",
  //     element: "",
  //     role: "private",
  //     name: "Custom Template",
  //     subRouting: true,
  //     subRoute: [
  //       {
  //         notLazy: true,
  //         path: "core-customers",
  //         element: "",
  //         role: "private",
  //         name: "Custom Template",
  //       },
  //     ],
  //   },
];
