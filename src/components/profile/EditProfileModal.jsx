import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Cancel, PhotoCamera } from "@mui/icons-material";
import supabase from "../../config/supabase";

const EditProfileModal = ({ open, onClose, user, placeholderData }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    full_name: placeholderData.full_name,
    email: placeholderData.email,
    bio: placeholderData.bio,
    location: placeholderData.location,
    phone: placeholderData.phone,
    image: placeholderData.image,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, bio, location, phone, avatar_url")
        .eq("id", user.id)
        .single();

      if (error || !data) {
        console.error("Error fetching profile:", error?.message);
      } else {
        setFormData({
          full_name: data.full_name || placeholderData.full_name,
          bio: data.bio || placeholderData.bio,
          location: data.location || placeholderData.location,
          phone: data.phone || placeholderData.phone,
          image: data.avatar_url || placeholderData.image,
        });
      }
      setLoading(false);
    };

    if (user?.id) fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: formData.full_name,
        bio: formData.bio,
        location: formData.location,
        phone: formData.phone,
        avatar_url: formData.image,
      })
      .eq("id", user.id);

    if (error) {
      alert("Error updating profile: " + error.message);
    }
    onClose();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  console.log("formData", formData);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        {/* Header */}
        <DialogTitle className="flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-semibold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <Cancel className="w-5 h-5" />
          </button>
        </DialogTitle>

        {/* Content */}
        <DialogContent className="p-6">
          <div className="flex flex-col items-center mb-6 relative">
            {loading ? (
              <div className="w-28 h-28 rounded-full border border-gray-300 bg-gray-200 animate-pulse" />
            ) : (
              <div className="relative group">
                {/* Profile Image */}
                <img
                  src={formData.image}
                  alt="Profile"
                  className="w-28 h-28 rounded-full border border-gray-300 object-cover shadow-lg"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Upload Icon */}
                  <label className="cursor-pointer flex flex-col items-center">
                    <PhotoCamera className="text-white w-8 h-8" />
                    <span className="text-xs text-white mt-1">Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded-md cursor-not-allowed"
            />

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="3"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </DialogContent>

        {/* Actions */}
        <DialogActions className="p-6 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default EditProfileModal;
