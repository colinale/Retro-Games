const { AuthenticationError } = require('apollo-server-express');
const { User, Console, Game } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          console.log(context.User);
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('games');
              console.log('here');
              console.log(userData);
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('games');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('games');
          },
          game: async() => {
            return Game.find()
          },
        game: async (parent, { _id }) => {
            return Game.findOne({_id});
        },
        games: async () => {
          return Game.find();
        },
        consoles: async () => {
            return Console.find()
        },
        console: async ({ _id }) => {
            return Console.findOne({_id});
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          addGame: async (parent, args, context) => {
            if (context.user) {
              const game = await Game.findOne(args.id)
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { games: game._id } },
                { new: true }
              );
      
              return game;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          removeGame: async (parent, args, context) => {
            if (context.user) {
              const game = await Game.findOne(args.id)
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { games: game._id } },
                { new: true }
              );
      
              return game;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },

    }
}

module.exports= resolvers;