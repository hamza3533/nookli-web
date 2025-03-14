import React, { useState, useEffect } from "react";
import { Phone, LocationOn, Lock, PhotoCamera, Edit } from "@mui/icons-material";
import supabase from "../../config/supabase";
import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

const ProfileHeader = ({ placeholderData }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData?.user) throw new Error(authError?.message);

        const userId = authData.user.id;
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("full_name, bio, location, phone, avatar_url, coverImage")
          .eq("id", userId)
          .single();

        setUser(
          profileError || !profileData
            ? placeholderData
            : { ...placeholderData, ...profileData, id: userId, email: authData.user.email }
        );
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setUser(placeholderData);
      } finally {
        setLoading(false);
      }
    };
    if (!editModalOpen) fetchUserData();
  }, [editModalOpen]);

  const handleCoverUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      setUser((prev) => ({ ...prev, coverImage: reader.result }));
      const { error } = await supabase
        .from("profiles")
        .update({ coverImage: reader.result })
        .eq("id", user.id);

      if (error) console.error("Error updating cover image:", error.message);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-32 md:h-40 w-full bg-red-500">
        {user?.coverImage && <img src={user.coverImage} alt="Cover" className="absolute w-full h-full object-cover" />}
        <label className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
          <PhotoCamera className="text-red-500" />
          <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
        </label>
      </div>

      <div className="relative flex items-center p-6">
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer" onClick={() => setEditModalOpen(true)}>
          <Edit className="text-red-500" />
        </button>
        <div className="absolute -top-16 left-6">
          {loading ? (
            <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse" />
          ) : (
            <img src={user?.avatar_url} alt="Profile" className="w-32 h-32 rounded-full border-2 border-white shadow-md object-cover" />
          )}
        </div>

        <div className="ml-36 space-y-1">
          <h2 className="text-xl font-semibold leading-tight">{loading ? <div className="w-32 h-5 bg-gray-300 animate-pulse" /> : user?.full_name}</h2>
          <p className="text-gray-500 text-sm">{loading ? <div className="w-40 h-4 bg-gray-300 animate-pulse" /> : user?.email}</p>
          <p className="text-gray-600 text-sm">{loading ? <div className="w-56 h-4 bg-gray-300 animate-pulse" /> : user?.bio}</p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <LocationOn className="text-red-500" />
            {loading ? <div className="w-32 h-4 bg-gray-300 animate-pulse" /> : user?.location}
          </p>
          <p className="text-gray-600 flex items-center gap-2 text-sm">
            <Phone className="text-red-500" />
            {loading ? <div className="w-32 h-4 bg-gray-300 animate-pulse" /> : user?.phone}
          </p>
          <div className="flex items-center gap-6 mt-3">
            <p className="text-gray-600 flex items-center gap-2 text-sm">
              <Lock className="text-red-500 mb-3" /> **********
            </p>
            <button className="mb-1 px-4 py-2 text-sm bg-gray-800 text-white rounded-lg shadow-md" onClick={() => setPasswordModalOpen(true)}>
              Change Password
            </button>
          </div>
        </div>
      </div>
      {editModalOpen && <EditProfileModal open={editModalOpen} onClose={() => setEditModalOpen(false)} user={user} placeholderData={placeholderData} />}
      {passwordModalOpen && <ChangePasswordModal open={passwordModalOpen} onClose={() => setPasswordModalOpen(false)} />}
    </div>
  );
};

export default ProfileHeader;
