import React, { useState, useEffect } from "react";
import {
  Box,
  useMediaQuery,
  Button,
  TextField,
  Typography,
  Modal,
  Fade,
} from "@mui/material";
import { Navbar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/authSlice";
import { GhDataApi } from "../../utils/axiosConfig";
import { selectUser } from "../../store/authSlice";
import { User } from "../../utils";

export const MyProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [name, setName] = useState((user as User).name as string);
  const [email, setEmail] = useState((user as User).email as string);
  const [profileImage, setProfileImage] = useState<string | null>(
    "src/assets/user.png"
  );
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [emailModal, setEmailModal] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    dispatch(setToken());
  }, []);

  const handleResetPassword = () => {
    setResetModalOpen(true);
  };

  const handleResetModalClose = () => {
    setResetModalOpen(false);
  };

  const handleDeleteAccount = () => {
    // Logic for deleting the account
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Process and save the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Logic for saving changes to name, email, and image
  };

  const handleResetPasswordConfirm = () => {
    // Logic for resetting password
    setResetModalOpen(false);
  };

  return (
    <Box>
      <Navbar />
      <Box
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          sx={{
            padding: "1.5rem 1.5rem 0.75rem 1.5rem",
            backgroundColor: "#f3f2f2",
            borderRadius: "0.75rem",
            color: "#161616",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                style={{ width: "200px", height: "200px" }}
              />
            )}
            <Typography variant="h5" m={"10px"}>
              Add photo:
            </Typography>
            <label
              htmlFor="fileInput"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#1976d2",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Choose a file
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          </Box>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          m={isNonMobileScreens ? undefined : "2rem 0"}
          sx={{
            padding: "1.5rem 1.5rem 0.75rem 1.5rem",
            backgroundColor: "#f3f2f2",
            borderRadius: "0.75rem",
            color: "#161616",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography variant="h5" mb={"10px"}>
              Edit name:
            </Typography>
            <TextField
              value={name}
              onChange={handleNameChange}
              label="Imię"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography variant="h5" mb={"10px"}>
              Edit email:
            </Typography>
            <TextField
              value={email}
              onChange={handleEmailChange}
              label="Adres e-mail"
              variant="outlined"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ marginBottom: "20px" }}
          >
            Save
          </Button>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          sx={{
            padding: "1.5rem 1.5rem 0.75rem 1.5rem",
            backgroundColor: "#f3f2f2",
            borderRadius: "0.75rem",
            color: "#161616",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography variant="h5" m={"10px"}>
              Delete account:
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteAccount}
            >
              Delete
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography variant="h5" m={"10px"}>
              Reset password:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleResetPassword}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal open={resetModalOpen} onClose={handleResetModalClose}>
        <Fade in={resetModalOpen}>
          <Box
            component="form"
            onSubmit={handleResetPasswordConfirm}
            sx={{
              backgroundColor: "#fff",
              width: "400px",
              padding: "1rem",
              borderRadius: "8px",
              margin: "auto",
              marginTop: "10vh",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" mb={2}>
              Reset Password
            </Typography>
            <TextField
              required
              value={emailModal}
              onChange={(e) => setEmailModal(e.target.value)}
              label="Email"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <TextField
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              label="New Password"
              type="password"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <TextField
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
              type="password"
              variant="outlined"
              sx={{ margin: "10px" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                !emailModal ||
                !newPassword ||
                !confirmPassword ||
                newPassword !== confirmPassword
              }
            >
              Reset
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
