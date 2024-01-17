import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import MobileHeader from "../Header/MobileHeader/MobileHeader";
import "./Layout.css";

const Layout = () => {
  const { currUserData } = useAuthContext();

  console.log(currUserData, "currUserData");
  return (
    <>
      <div className="site_desktop_header">
        <Header />
      </div>

      <div className="site_body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
