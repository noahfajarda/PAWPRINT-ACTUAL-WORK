const { User, Pet } = require("../models")
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // USER
    users: async () => {
      console.log("ALL USERS")
      return await User.find({});
    },
    user: async () => {
      console.log("ONE USER")
    },
    // PET
    pets: async () => {
      console.log("ALL PETS")
    },
    pet: async () => {
      console.log("ONE PET")
    },
  },
  Mutation: {
    // USER
    // ADD/SIGNUP
    addUser: async (parent, {
      email,
      password,
      firstName,
      lastName,
      birthMonth,
      birthDay,
      birthYear,
      zipCode,
    }) => {
      console.log("CREATE USER")
      const user = await User.create({
        email,
        password,
        firstName,
        lastName,
        birthMonth,
        birthDay,
        birthYear,
        zipCode
      });
      // add token
      const token = signToken(user);
      return { token, user }
    },
    // DELETE
    deleteUser: async (parent, {
      id
    }) => {
      console.log("DELETE USER")
      console.log(id)
      return await User.findOneAndDelete({ _id: id })
    }
  }
}

module.exports = resolvers