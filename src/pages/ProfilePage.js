import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Typography, Grid, Button, Modal, TextField } from '@mui/material';
import { updateMember } from '../store/memberSlice'; // Import the new action

// Style for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.members.members[0]); // Assuming first user is logged in
  
  const [open, setOpen] = useState(false); // State to control the modal
  const [formData, setFormData] = useState({});

  // When the component loads, or when currentUser changes, update the form data
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        email: currentUser.email,
        mobile: currentUser.mobile,
      });
    }
  }, [currentUser]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateMember({ id: currentUser.id, updatedData: formData }));
    handleClose(); // Close the modal after saving
  };

  if (!currentUser) {
    return <Typography>Please log in to see your profile.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>My Profile</Typography>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '8px' }}>
        <Grid container spacing={2}>
          {/* Displaying user data */}
          <Grid item xs={12} sm={6}><Typography><b>Member ID:</b> {currentUser.id}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><b>Name:</b> {currentUser.name}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><b>Email:</b> {currentUser.email}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><b>Mobile:</b> {currentUser.mobile}</Typography></Grid>
          <Grid item xs={12}><hr style={{ border: 'none', borderTop: '1px solid #eee' }} /></Grid>
          <Grid item xs={12} sm={6}><Typography><b>Aadhar (KYC):</b> {currentUser.aadhar}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography><b>PAN (KYC):</b> {currentUser.pan}</Typography></Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleOpen}>Edit Profile</Button>
      </Paper>

      {/* The Edit Profile Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">Edit Profile</Typography>
          <TextField name="name" label="Full Name" value={formData.name || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField name="email" label="Email Address" value={formData.email || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField name="mobile" label="Mobile Number" value={formData.mobile || ''} onChange={handleChange} fullWidth margin="normal" />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSave}>Save Changes</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProfilePage;