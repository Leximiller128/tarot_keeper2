const { Schema, model } = require("mongoose");

const readingsSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cardId: {
    type: Schema.Types.ObjectId,
    ref: "Card",
  },

  //   title: {
  //     type: String,
  //     required: true,
  //   },
  //   question: {
  //     type: String,
  //     required: true,
  // },
  //   notes: {
  //     type: String,
  //     required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return new Date(timestamp).toLocaleString();
    },
  },
});

const Reading = model("Reading", readingsSchema);

module.exports = Reading;
