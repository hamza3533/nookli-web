import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useState } from "react";
import supabase from "../../config/supabase";

const ChangePasswordModal = ({ open, onClose }) => {
  const [password, setPassword] = useState("");

  const handleChangePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      alert("Error changing password: " + error.message);
    } else {
      alert("Password changed successfully!");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <TextField
          type="password"
          label="New Password"
          fullWidth
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleChangePassword} color="primary">
          Change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordModal;
