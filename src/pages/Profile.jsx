import React from "react";
import Back from "../components/Back";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

function Profile() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col border-1 py-4 mt-3 bg-white rounded-lg shadow-lg border-gray-300 w-29/30 justify-center items-center gap-3">
        <div className="absolute left-6 top-6">
          <Back />
        </div>
        <h1 className="font-bold text-lg">Profile</h1>
        <Link
          to="/dashboard"
          className="rounded-md px-3 py-2 bg-blue-400 text-white cursor-pointer"
        >
          Dashboard
        </Link>
        <Logout />
      </div>
    </div>
  );
}

export default Profile;
