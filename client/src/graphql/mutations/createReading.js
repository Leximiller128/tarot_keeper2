import { gql } from "@apollo/client";

export const CREATE_READING = gql`
  mutation addReading(
    $name: String!
    $arcana: String!
    $suit: String!
    $img: String!
    $fortune_telling: String!
    $keywords: String!
    $meaning_up: String!
    $meaning_rev: String!
    $desc: String!
  ) {
    addReading(
      name: $name
      arcana: $arcana
      suit: $suit
      img: $img
      fortune_telling: $fortune_telling
      keywords: $keywords
      meaning_up: $meaning_up
      meaning_rev: $meaning_rev
      desc: $desc
    ) {
      token
      user{
        _id
      }
    }
  }
`;
