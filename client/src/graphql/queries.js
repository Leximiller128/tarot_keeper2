import { gql } from '@apollo/client';

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
