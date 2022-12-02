const { Schema, model } = require('mongoose');

const cardSchema = require('./TarotCard');
const userSchema = require('./User');

const readingsSchema = new Schema ({
  tarotCard: [cardSchema],
});


module.exports = cardSchema;
module.exports = userSchema;