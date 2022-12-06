//import library.css
import "./library.css";
import { useQuery } from "@apollo/client";
import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
} from "mdb-react-ui-kit";
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { GET_ME } from "../../graphql/queries";

export default function Library() {
  const { loading, data } = useQuery(GET_ME);
  console.log("getme result", data);
  return (
    <>
      {Auth.loggedIn() ? (
        <div>
          <MDBContainer fluid>
            <MDBInputGroup tag="form" className="d-flex-w-auto-mb-3">
              <input
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn className="searchBtn">Search</MDBBtn>
            </MDBInputGroup>
          </MDBContainer>

          <MDBCard
            className="card-element"
            style={{ maxWidth: "30rem" }}
            aria-hidden="true"
          >
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
              position="top"
              alt="Sunset Over the Sea"
            />
            <MDBCardBody>
              <MDBCardTitle className="placeholder-glow">
                <span className="placeholder col-6"></span>
              </MDBCardTitle>
              <MDBCardText className="placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}
