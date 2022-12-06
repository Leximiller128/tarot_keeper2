import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      tarotCard {
        name
        arcana
        suit
        img
        fortune_telling
        keywords
        meaning_up
        meaning_rev
        desc
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
