import { useQuery } from "@apollo/client";
import "./newreading.css";
import { SEARCH_CARD } from "../../graphql/queries";
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

const searchSingleCard = ({ card }) => {
  return (
    <>
      {card && (
        <MDBCard
          className="card-element"
          style={{ maxWidth: "25rem", margin: "auto" }}
          aria-hidden="true"
        >
          <MDBCardImage
            src={require(`../../cards/${card.img}`)}
            position="top"
            alt={card.name}
          />

          <MDBCardBody>
            <MDBCardTitle>
              <span className=" col-6">{card.name}</span>
            </MDBCardTitle>
            <MDBCardText class="cardDesc">Description: {card.desc}</MDBCardText>
            <MDBBtn id="search-btn">Add Card</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
};

export default searchSingleCard;
