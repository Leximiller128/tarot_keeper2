import { gql } from '@apollo/client';

export const GET_ME = gql`
   {
    me {
      _id
      username
      email
      tarotCard {
        description
        cardId
        image
        title
      }
    }
  }
`;
