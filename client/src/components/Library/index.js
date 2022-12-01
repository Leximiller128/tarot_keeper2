//import library.css
import "./library.css";

import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Library() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
          <input
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
            type="Search"
          />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}

// export default function Library() {
//   return <p>Library Page</p>;
// }
