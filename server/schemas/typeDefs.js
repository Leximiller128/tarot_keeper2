const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String!
    password: String
    readings: [Reading]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Card {
    _id: ID!
    name: String
    arcana: String
    suit: String
    img: String
    fortune_telling: [String]
    keywords: [String]
    meaning_rev: String
    meaning_up: String
    desc: String
  }

  type Reading {
    _id: ID!
    userId: ID!
    cardId: ID
    createdAt: String!
  }
  input CardInput {
    _id: ID!
    name: String
    arcana: String
    suit: String
    img: String
    fortune_telling: [String]
    keywords: [String]
    meaning_rev: String
    meaning_up: String
    desc: String
  }
  input ReadingInput {
    userId: ID!
    cardId: ID!
    createdAt: String!
  }

  type Query {
    me: User
    allUsers: [User]
    readings: [Reading]
    cards: [Card]
    singleCard(card: String!): Card
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveReading(userId: ID!, reading: ReadingInput!): User
    saveCard(newCard: String!): User
    removeCard(cardId: ID!): User
  }
`;

module.exports = typeDefs;
