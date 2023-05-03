import { gql } from '@apollo/client';

// {
//   "email": "test123@gmail.com",
//   "password": "tesoaiwenvaoiwej3242",
//   "firstName": "Jason",
//   "lastName": "Multi",
//   "birthMonth": 3,
//   "birthDay": 23,
//   "birthYear": 2000,
//   "zipCode": 94560,
// }
export const CREATE_USER = gql`
  mutation CREATEUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $birthMonth: Int!, $birthDay: Int!, $birthYear: Int!, $zipCode: Int!) {
    addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, birthMonth: $birthMonth, birthDay: $birthDay, birthYear: $birthYear, zipCode: $zipCode) {
      token
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
}
`;

// {
//   "deleteUserId": "64503c71210b3c69da38dd9c"
// }
export const DELETE_USER = gql`
  mutation DELETEUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
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