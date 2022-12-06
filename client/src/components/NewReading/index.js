import { useQuery } from "@apollo/client";
// import React, { useState } from "react";
import { useState } from 'react';
// import { Card } from "../../../../server/models/tarotCard";
import { ALL_CARDS } from "../../graphql/queries";
// import searchCard from "./searchcard";
import "./newreading.css";



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
  const { data } = useQuery(ALL_CARDS);
  const cardList = data?.allCards || [];
  console.log(data);
  console.log(cardList);
  // const map1 = data.cards.map(x=> x.name)
  // console.log(map1)

  const [cardOption, setCardOption] = useState('');
  const handleChangeEvent = (e) => {
    setCardOption(e.target.value)
  }
 

  return (
    <>
      {/* Tarot card placement */}
      <MDBCard
        className="card-element"
        style={{ maxWidth: "25rem" }}
        aria-hidden="true"
      >

        <MDBCardImage src="" position="top" alt="Sunset Over the Sea" />

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
            <span className="placeholder col-8"></span>
            <span className="placeholder col-8"></span>
          </MDBCardText>
          <MDBBtn id="search-btn">Add Card</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      {/* Text area and search bar */}
      <MDBContainer className="text-area">
        <MDBDropdown>
          <MDBDropdownToggle>Pick a Card 🔮</MDBDropdownToggle>
          <MDBDropdownMenu 
          id="cardOption"
          value={cardOption}
          onChange={handleChangeEvent}
          label="card Option"
          >
            <MDBDropdownItem >Choose a card!</MDBDropdownItem>
            {cardList.map((card) => (
              // data.cards.map
              <MDBDropdownItem 
              link childTag='button'
              key={card._id} 
              value={card._id}
              >
                {card.name}
              </MDBDropdownItem>
            ))}
          </MDBDropdownMenu>
        </MDBDropdown>

        <MDBInput label="Title for New Reading" id="typeText" type="text" />
        <MDBInput label="Initial Question Asked" id="typeText" type="text" />
        <MDBTextArea label="Notes" id="typeText" rows={4} />
        <MDBBtn className="submit-btn">Submit</MDBBtn>
      </MDBContainer>
    </>
  );
}

export default NewReadingForm;
