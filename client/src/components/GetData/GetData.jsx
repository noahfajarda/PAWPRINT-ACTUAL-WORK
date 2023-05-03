import React from "react";

// import queries
import { useQuery, useMutation } from "@apollo/client/react/hooks";
import { QUERY_USERS } from "../../utils/queries";
import { DELETE_USER } from "../../utils/mutations";

export default function GetData() {
  const { loading, data } = useQuery(QUERY_USERS);

  // retrieve users from database
  const users = data?.users || [];

  // delete user mutation, with cache update
  const [deleteUser, { deleteError, deleteData }] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }) {
      try {
        const { users } = cache.readQuery({ query: QUERY_USERS });

        const newUsers = users.filter((user) => user._id !== deleteUser._id);

        cache.writeQuery({
          query: QUERY_USERS,
          data: { users: newUsers },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // delete user based on id
  const deleteUserFunction = async (user) => {
    console.log(user._id);
    await deleteUser({ variables: { deleteUserId: user._id } });
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            // <ProfileList
            //   profiles={profiles}
            //   title="Here's the current roster of friends..."
            // />
            <div>
              <h3>Here are the users:</h3>
              {users.map((user, index) => (
                <div key={index}>
                  <div>{user.firstName}</div>
                  <div>{user.lastName}</div>
                  <div>{user.email}</div>
                  <div
                    className="bg-rose-700"
                    onClick={() => deleteUserFunction(user)}
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
