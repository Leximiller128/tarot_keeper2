import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      readings {
        cardId
      }
    }
  }
`;

export const SEARCH_CARD = gql`
  query searchCard($card: String!) {
    singleCard(card: $card) {
      name
      img
      suit
    }
  }
`;

export const ALL_CARDS = gql`
  query allCards {
    cards {
      name
      img
      arcana
      suit
      desc
      _id
    }
  }
`;
