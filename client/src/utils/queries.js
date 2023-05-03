import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      email
      password
      firstName
      lastName
      birthMonth
      birthDay
      birthYear
      zipCode
    }
  }
`;

export const QUERY_ONE_USER = gql`
  query oneUser {
    user {
      _id
      email
      password
      firstName
      lastName
      birthMonth
      birthDay
      birthYear
      zipCode
    }
  }
`;