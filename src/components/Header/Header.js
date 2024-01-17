import f_icon from "../../assets/images/f_icon.svg";
import { Children } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { DESKTOP_MENU } from "../../utils/constant";
import { useAuthContext } from "./../../ContextAPI/AuthContextAPI";
import Logo from "../../assets/images/logo.png";
import user_icon from "../../assets/images/user_icon.svg";

import "./HeaderStyle.css";

const Header = () => {
  const history = useNavigate();
  const { currUserData, doLogout } = useAuthContext();
  return (
    <header>
      <Navbar expand="lg" className="nav_outer p-0">
        <Container>
          <Navbar.Brand className="p-0">
            <Link to="/" className="">
              <img alt="Site Logo" src={Logo} width="170" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto align-items-center" navbarScroll>
              {Children.toArray(
                DESKTOP_MENU.map((el) =>
                  el.externalUrl ? (
                    <a
                      href={el.path}
                      className="fs_22 fw_semibold menu_item color_89"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {el.name}
                    </a>
                  ) : (
                    <Link
                      to={el.path}
                      className="fs_22 fw_semibold menu_item color_89"
                    >
                      {el.name}
                    </Link>
                  )
                )
              )}

              {/* <DropdownButton
              id="dropdown-basic-button"
              title={<img src={f_icon} />}
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton> */}
              {/* <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle px-4"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={f_icon} /> Account
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
              </ul>
            </div> */}
            </Nav>
          </Navbar.Collapse>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#login"
          >
            <span className="user_icon">
              <img src={user_icon} />{" "}
            </span>{" "}
            Login
          </button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
