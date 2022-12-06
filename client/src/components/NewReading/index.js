import { useQuery } from "@apollo/client";
// import React, { useState } from "react";
import { useState } from "react";
// import { Card } from "../../../../server/models/tarotCard";
import { ALL_CARDS } from "../../graphql/queries";
import SearchCard from "./searchcard";
import "./newreading.css";
import { Navigate } from "react-router-dom";
import Auth from "../../utils/auth";

import {
  MDBContainer,
  MDBBtn,
  // MDBInputGroup,
  MDBTextArea,
  MDBInput,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const NewReadingForm = () => {
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
          {/* Text area and search bar */}
          <MDBContainer className="text-area">
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

            <MDBInput label="Title for New Reading" id="typeText" type="text" />
            <MDBInput
              label="Initial Question Asked"
              id="typeText"
              type="text"
            />
            <MDBTextArea label="Notes" id="typeText" rows={4} />
            <MDBBtn className="submit-btn">Submit</MDBBtn>
          </MDBContainer>
          {/* Tarot card placement */}
          <SearchCard card={cardOption} />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default NewReadingForm;
