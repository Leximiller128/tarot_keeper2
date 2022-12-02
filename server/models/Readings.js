const { Schema, model } = require('mongoose');

const cardSchema = require('./TarotCard');
const userSchema = require('./User');

const readingsSchema = new Schema ({
  user: [userSchema],
  tarotCard: [cardSchema],
});

module.exports = readingsSchema;