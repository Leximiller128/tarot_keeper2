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
  // last 2 are causing errors with validateDOMNesting, can be commaed out
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
//   const token = window.localStorage.getItem("token");
//   const user = jwt_decode(token);
//   const userId = user.data._id;

//   const { loading, data } = useQuery(FETCH_USER, {
//     variables: { userId: userId }
// });
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

            <Link to="/Login">
              <MDBNavbarItem>
                <MDBNavbarLink>Logout</MDBNavbarLink>
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
