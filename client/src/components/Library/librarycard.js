import { useQuery } from "@apollo/client";
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

const libraryCard = ({ card }) => {
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
            <MDBCardText>Description: {card.desc}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
};

export default libraryCard;
