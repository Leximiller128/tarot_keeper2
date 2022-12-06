import { useQuery } from '@apollo/client';
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
  

const searchSingleCard = () => {
    // const { loading, data } = useQuery(ALL_CARDS);
return (

<MDBCard
        className="card-element"
        style={{ maxWidth: "25rem" }}
        aria-hidden="true"
      >

        <MDBCardImage
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
          position="top"
          alt="Sunset Over the Sea"
        />

        <MDBCardBody>
          <MDBCardTitle>
            <span className=" col-6">{"cardOption"}</span>
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
)
}

export default searchSingleCard;