const { User } = require('../models/User');
const { signToken } = require('../utils/auth.js');

const resolvers = {
    Query: {    
        me: async (_, args, { req }) => {
            if (!req.userId) {
                return null;
            }
            const user = await User.findById(req.userId);
            return user;
        }
    },
    Mutation: {
        signup: async (_, { email, password }) => {
            const user = await User.create({
                email,
                password
            });

            const token = signToken(user._id);

            return {
                token,
                user
            };
        }
    }
}

module.exports = resolvers;