const { Schema, model} = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const cardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  arcana: {
    type: String
  },
  suit: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  fortune_telling: {
    type: [String],
    required: true
  },
  keywords: {
    type: [String]
  },
  meaning_up: {
    type: String,
    required: true
  },
  meaning_rev: {
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  },

});

const Card = model('Card', cardSchema);

module.exports = Card;
