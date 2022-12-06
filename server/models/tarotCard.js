const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  name: {
    type: String,
    required: true,
  },
  arcana: {
    type: String,
  },
  suit: {
    type: String,
  },
  img: {
    type: String,
  },
  fortune_telling: {
    type: [String],
  },
  keywords: {
    type: [String],
  },
  meaning_up: {
    type: String,
  },
  meaning_rev: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
