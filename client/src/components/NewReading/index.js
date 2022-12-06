import "./newreading.css";
// import { Card } from "../../../../server/models/tarotCard";

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

// const SearchCard = () => {
//   // create state for holding returned google api data
//   const [searchedCards, setSearchedCards] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved bookId values
//   const [savedCardIds, setSavedCardIds] = useState(getSavedCardIds());

//   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveCardIds(savedCardIds);
//   });

//   // create method to search for books and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await searchGoogleBooks(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();

//       const cardData = items.map((card) => ({
//         bookId: book.id,
//         authors: book.volumeInfo.authors || ['No author to display'],
//         title: book.volumeInfo.title,
//         description: book.volumeInfo.description,
//         image: book.volumeInfo.imageLinks?.thumbnail || '',
//       }));

//       setSearchedBooks(bookData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // create function to handle saving a book to our database
//   const handleSaveBook = async (bookId) => {
//     // find the book in `searchedBooks` state by the matching id
//     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await saveBook(bookToSave, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };
export default function NewReading() {
  return (
    <>
      {/* Tarot card placement */}
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
        <MDBContainer>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Search for Card"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn id="search-btn">Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
        <MDBInput label="Title for New Reading" id="typeText" type="text" />
        <MDBInput label="Initial Question Asked" id="typeText" type="text" />
        <MDBTextArea label="Notes" id="typeText" rows={4} />
        <MDBBtn className="submit-btn">Submit</MDBBtn>
      </MDBContainer>
    </>
  );
};
// }
