const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    birthMonth: Int!
    birthDay: Int!
    birthYear: Int!
    zipCode: Int!
    pets: [Pet]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Pet {
    petName: String!
  }

  type Query {
    users: [User]
    user: User
    pets: [Pet]
    pet: Pet
  }

  type Mutation {
    # add user
    addUser(email: String!,
    password: String!,
    firstName: String!,
    lastName: String!,
    birthMonth: Int!,
    birthDay: Int!,
    birthYear: Int!,
    zipCode: Int!): Auth
    # delete user
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;