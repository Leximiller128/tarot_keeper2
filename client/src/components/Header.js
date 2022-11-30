// import "../styles/header.css";
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
  // const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <Link to="/NewReading">
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
          // onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <Link to="/NewReading">
              <MDBNavbarItem>
                {/* <MDBNavbarLink active aria-current="page"> */}
                New Reading
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
            <Link to="/Library">
              <MDBNavbarItem>
                {/* <MDBNavbarLink> */}
                Library
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
            <Link to="/PastReadings">
              <MDBNavbarItem>
                {/* <MDBNavbarLink> */}
                Past Readings
                {/* </MDBNavbarLink> */}
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
