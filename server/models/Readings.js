const { Schema, model } = require('mongoose');

const Card = require('./tarotCard');

const readingsSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  readingId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
        return new Date(timestamp).toLocaleString();
    }
  } 
});

const Reading = model('Reading', readingsSchema);

module.exports = Reading;