import React from "react";
import { Phone, LocationOn, Lock, Share } from "@mui/icons-material";

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Banner Section */}
      <div className="relative bg-red-500 h-24 md:h-32 w-full">
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Share className="text-gray-600" />
        </button>
      </div>

      {/* Profile Info Section */}
      <div className="relative flex items-center p-6">
        {/* Profile Picture */}
        <div className="absolute -top-14 left-6">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        <div className="ml-32">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.bio}</p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <LocationOn className="text-gray-400" /> {user.location}
          </p>

          {/* Contact and Security */}
          <div className="flex items-center gap-4 mt-3">
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <Phone className="text-red-500" /> {user.phone}
            </p>
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <Lock className="text-red-500" /> ********
            </p>
          </div>

          {/* Change Password Button */}
          <button className="mt-2 px-4 py-1 text-sm bg-gray-800 text-white rounded-lg shadow-sm">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
