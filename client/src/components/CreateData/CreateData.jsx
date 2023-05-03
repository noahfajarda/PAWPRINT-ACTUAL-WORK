import React, { useReducer } from "react";

// for local storage setting token
import Auth from "../../utils/auth";

// import mutations
import { useQuery, useMutation } from "@apollo/client/react/hooks";
import { CREATE_USER } from "../../utils/mutations";
import { QUERY_USERS } from "../../utils/queries";

// check form fields
import { checkFields } from "./checkFields";

export default function CreateData() {
  // form with useReducer
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      email: "wehowighjoi@gmail.com",
      password: "asdfasdf",
      CONFIRM_PASSWORD: "asdfasdf",
      firstName: "erereegbhb",
      lastName: "erbrhrherb",
      birthMonth: "12",
      birthDay: "1",
      birthYear: "2000",
      zipCode: "94560",
    }
  );

  // query all users (used for the mutation)
  const { loading, data } = useQuery(QUERY_USERS);

  // mutations
  const [createUser, { createError, createData }] = useMutation(CREATE_USER, {
    update(cache, { data: { addUser } }) {
      try {
        const { users } = cache.readQuery({ query: QUERY_USERS });

        cache.writeQuery({
          query: QUERY_USERS,
          data: { users: [...users, addUser.user] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // check if any field is empty or if passwords don't match
      if (!checkFields(state)) {
        return;
      }

      // create User in DB
      const { data } = await createUser({
        variables: {
          email: state.email,
          password: state.password,
          firstName: state.firstName,
          lastName: state.lastName,
          birthMonth: parseInt(state.birthMonth),
          birthDay: parseInt(state.birthDay),
          birthYear: parseInt(state.birthYear),
          zipCode: parseInt(state.zipCode),
        },
      });

      // reset form variables
      dispatch({
        email: "",
        password: "",
        CONFIRM_PASSWORD: "",
        firstName: "",
        lastName: "",
        birthMonth: "",
        birthDay: "",
        birthYear: "",
        zipCode: "",
      });

      // set token to local storage
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleFormSubmit} className="flex flex-col">
        Email
        <input
          type="text"
          className="text-black"
          value={state.email}
          onChange={(e) => dispatch({ email: e.target.value })}
        />
        Password
        <input
          type="password"
          className="text-black"
          value={state.password}
          onChange={(e) => dispatch({ password: e.target.value })}
        />
        Confirm Password
        <input
          type="password"
          className="text-black"
          value={state.CONFIRM_PASSWORD}
          onChange={(e) => dispatch({ CONFIRM_PASSWORD: e.target.value })}
        />
        First
        <input
          type="text"
          className="text-black"
          value={state.firstName}
          onChange={(e) => dispatch({ firstName: e.target.value })}
        />
        Last
        <input
          type="text"
          className="text-black"
          value={state.lastName}
          onChange={(e) => dispatch({ lastName: e.target.value })}
        />
        <div className="flex justify-center">
          <div className="flex flex-col m-1">
            Month
            <input
              type="number"
              min="1"
              max="12"
              className="text-black"
              value={state.birthMonth}
              onChange={(e) => dispatch({ birthMonth: e.target.value })}
            />
          </div>
          <div className="flex flex-col m-1">
            Day
            <input
              type="number"
              min="1"
              max="31"
              className="text-black"
              value={state.birthDay}
              onChange={(e) => dispatch({ birthDay: e.target.value })}
            />
          </div>
          <div className="flex flex-col m-1">
            Year
            <input
              type="number"
              className="text-black"
              min="0"
              max={new Date().getFullYear()}
              value={state.birthYear}
              onChange={(e) => dispatch({ birthYear: e.target.value })}
            />
          </div>
        </div>
        Zip Code
        <input
          type="number"
          className="text-black"
          value={state.zipCode}
          onChange={(e) => dispatch({ zipCode: e.target.value })}
        />
        <button type="submit" className="btn btn-primary bg-sky-700">
          Submit
        </button>
      </form>
      <div>
        <div>Show data</div>
        <div>Email: {state.email}</div>
        <div>Password: {state.password}</div>
        <div>Confirm Password: {state.CONFIRM_PASSWORD}</div>
        <div>First: {state.firstName}</div>
        <div>Last: {state.lastName}</div>
        <div>
          B-Day: {state.birthMonth}/{state.birthDay}/{state.birthYear}
        </div>
        <div>Zip Code: {state.zipCode}</div>
      </div>
    </div>
  );
}
