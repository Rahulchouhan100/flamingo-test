// import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import Home_icon from "../assets/images/ion_home.svg";
import Hostel_pg_icon from "../assets/images/hotels-iocn.svg";
import Coliving_ico from "../assets/images/shared-homes-icon.svg";
import Hotels_icon from "../assets/images/hostel_icon.svg";
import Resorts_icon from "../assets/images/resto_icon.svg";

export const ERRORMSG = "Something went wrong.!";
export const DESKTOP_MENU = [
  {
    name: (
      <span>
        <span>
          <img src={Home_icon} />
        </span>
        Home
      </span>
    ),
    path: "/",
    externalUrl: false,
  },
  {
    name: (
      <span>
        <span>
          <img src={Hostel_pg_icon} />
        </span>
        Hostel/PG
      </span>
    ),
    path: "/hostel-pg",
  },

  {
    name: (
      <span>
        {" "}
        <span>
          <img src={Coliving_ico} />
        </span>
        Co-living
      </span>
    ),
    path: "/Coliving",
  },
  {
    name: (
      <span>
        {" "}
        <span>
          <img src={Hotels_icon} />
        </span>
        Hotels
      </span>
    ),
    path: "/Hotels",
  },
  {
    name: (
      <span>
        {" "}
        <span>
          <img src={Resorts_icon} />
        </span>
        Resorts
      </span>
    ),
    path: "/Resorts",
  },
];
