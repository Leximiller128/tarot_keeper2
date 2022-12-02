const { Schema, model } = require('mongoose');

const cardSchema = require('./TarotCard');

const readingsSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  readingId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  readingBody: [cardSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
        return new Date(timestamp).toLocaleString();
    }
  } 
});

module.exports = readingsSchema;