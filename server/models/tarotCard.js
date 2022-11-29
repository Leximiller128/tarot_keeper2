const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const cardSchema = new Schema({
  // authors: [
  //   {
  //     type: String,
  //   },
  // ],  we'll have to see what this is in the API
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks.... card ID from API?
  cardId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  // link: {
  //   type: String,
  // },  maybe don't need this?
  title: {
    type: String,
    required: true,
  },
});

module.exports = cardSchema;
