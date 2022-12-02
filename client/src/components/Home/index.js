//import css
import "./home.css";
import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInputGroup,
  MDBTextArea,
  MDBInput,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Home() {
  return (
    <>
      {/* Tarot card placement */}
      <MDBCard className="card-element" style={{ maxWidth: "15rem" }} aria-hidden="true">
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
          <MDBBtn
            href="#"
            tabIndex={-1}
            disabled
            className="placeholder col-6"
          ></MDBBtn>
        </MDBCardBody>
      </MDBCard>

      {/* Text area and search bar */}
      <MDBContainer className="text-area">
        <MDBContainer fluid>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Search for Card"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
        <MDBInput className="new-title" label="Title for New Reading" id="typeText" type="text" />
        <MDBInput label="Inital Question Asked" id="typeText" type="text" />
        <MDBTextArea label="Notes" id="textAreaExample" rows={4} />
        <MDBBtn className="search-btn">Submit</MDBBtn>
      </MDBContainer>
    </>
  );
}
export default Home;
