import React from "react";

import auth from "../../utils/auth";

export default function SignoutButton() {
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <button
        className="rounded-full bg-emerald-600 m-4 p-5 hover:bg-emerald-700"
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </div>
  );
}
