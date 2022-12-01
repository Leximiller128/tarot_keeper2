//import css
import "./navigation.css";

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <Link to="/">
          {/* <MDBNavbarBrand> */}
          Home
          {/* </MDBNavbarBrand> */}
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <Link to="/NewReading">
              <MDBNavbarItem>
                {/* <MDBNavbarLink active aria-current="page"> */}
                New Reading
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
            <Link to="/PastReadings">
              <MDBNavbarItem>
                {/* <MDBNavbarLink active aria-current="page"> */}
                Past Readings
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
            <Link to="/Library">
              <MDBNavbarItem>
                {/* <MDBNavbarLink> */}
                Search Library
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
            <Link to="/FriendReadings">
              <MDBNavbarItem>
                {/* <MDBNavbarLink> */}
                Friends' Readings
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
