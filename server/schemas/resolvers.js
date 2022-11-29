const { User } = require("../models");
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
  },
  Mutation: {
    addUser: async (parent, args) => {
      const userData = await User.create(args);
      const token = signToken(userData);
      return { userData, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
// need to add 'save card', 'remove card',
// saveBook: async (parent, { newBook }, context) => {
//   if (context.user) {
//     const updatedUser = await User.findByIdAndUpdate(
//       { _id: context.user._id },
//       { $push: { savedBooks: newBook } },
//       { new: true }
//     );
//     return updatedUser;
//   }
//   throw new AuthenticationError("You need to be logged in!");
// },
// removeBook: async (parent, { bookID }, context) => {
//   if (context.User) {
//     const updatedUser = await User.findByIdAndUpdate(
//       { _id: context.user._id },
//       { $pull: { savedBooks: { bookId } } },
//       { new: true }
//     );
//     return updatedUser;
//   }
//   throw new AuthenticationError("You need to be logged in!");
// },
  },
};

module.exports = resolvers;