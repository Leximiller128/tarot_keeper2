//import css
import "./navigation.css";
import Auth from "../../utils/auth";

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  // last 2 are causing errors with validateDOMNesting, can be commaed out
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log("logged in?", Auth.loggedIn());
  const loggedIn = Auth.loggedIn();
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" style={{ backgroundColor: "#88B8A1" }}>
      <MDBContainer fluid>
        <Link to="/">
          <MDBNavbarBrand>Tarot Keeper</MDBNavbarBrand>
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
            {loggedIn && (
              <>
                <Link to="/NewReading">
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      New Reading
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
                <Link to="/PastReadings">
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page">
                      Past Readings
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
                <Link to="/Library">
                  <MDBNavbarItem>
                    <MDBNavbarLink>Search Library</MDBNavbarLink>
                  </MDBNavbarItem>
                </Link>
              </>
            )}

            <Link
              to="/Login"
              onClick={() => {
                Auth.logout();
              }}
            >
              <MDBNavbarItem>
                <MDBNavbarLink>{loggedIn ? "Logout" : "Login"}</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );

  // function LoginNavbar() {
  //   const [showNavText, setShowNavText] = useState(false);

  //   return (
  //     <MDBNavbar expand="lg" style={{ backgroundColor: "#88B8A1" }}>
  //       <MDBContainer fluid>
  //         <Link to="/">
  //           <MDBNavbarBrand>Tarot Keeper</MDBNavbarBrand>
  //         </Link>
  //         <MDBNavbarToggler
  //           type="button"
  //           data-target="#navbarText"
  //           aria-controls="navbarText"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //           onClick={() => setShowNavText(!showNavText)}
  //         >
  //           <MDBIcon icon="bars" fas />
  //         </MDBNavbarToggler>
  //         <MDBCollapse navbar show={showNavText}>
  //           <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
  //             <Link to="/Login">
  //               <MDBNavbarItem>
  //                 <MDBNavbarLink>Logout</MDBNavbarLink>
  //               </MDBNavbarItem>
  //             </Link>
  //           </MDBNavbarNav>
  //         </MDBCollapse>
  //       </MDBContainer>
  //     </MDBNavbar>
  // );
  // }
}
