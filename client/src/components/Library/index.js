//import library.css
// import "./library.css";
import "../NewReading/newreading.css";
import { useQuery } from "@apollo/client";
import { ALL_CARDS } from "../../graphql/queries";
import { useState } from "react";
import SearchCard from "../NewReading/searchcard";

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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";

const Library = () => {
  const { loading, data } = useQuery(ALL_CARDS);

  const [cardOption, setCardOption] = useState(null);
  const handleChangeEvent = (e) => {
    console.log("handle change");
    // setCardOption(e.target.innerText);
  };
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <MDBContainer fluid>
            <MDBDropdown>
              <MDBDropdownToggle>Pick a Card 🔮</MDBDropdownToggle>
              <MDBDropdownMenu
                id="cardOption"
                value={cardOption}
                onChange={(e) => {
                  handleChangeEvent(e);
                }}
                label="card Option"
              >
                <MDBDropdownItem>Choose a card!</MDBDropdownItem>
                {!loading
                  ? data.cards.map((card) => (
                      <MDBDropdownItem
                        link
                        childTag="button"
                        key={card._id}
                        value={card._id}
                        onClick={(e) => {
                          setCardOption(card);
                        }}
                      >
                        {card.name}
                      </MDBDropdownItem>
                    ))
                  : ""}
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBContainer>

          <SearchCard card={cardOption} />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default Library;
