const { User, Card, Reading } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //to populate other users readings (feed)
    readings: async () => {
      return User.find().populate("readings");
    },
    cards: async () => {
      return Card.find();
    },
    singleCard: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Card.findOne(params);
    },
  },
  Mutation: {
    //untested: needs authentication to work
    // addReading: async (parent, args) => {
    //   if (context.user) {
    //     const readingData = await Reading.create(args);
    //     return { readingData };
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    addUser: async (parent, args) => {
      const userData = await User.create(args);
      const token = signToken(userData);
      return { token, userData };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    //works in theory! which is great.
    saveCard: async (parent, { newCard }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedCards: newCard } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCard: async (parent, { cardId }, context) => {
      if (context.User) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCards: { cardId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
