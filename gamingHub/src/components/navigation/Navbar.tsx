import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
  Link,
  Avatar,
  Button,
} from "@mui/material";
import {
  Message,
  EditNotifications,
  Help,
  Menu,
  Person,
  Close,
} from "@mui/icons-material";
import BlindIcon from "@mui/icons-material/Blind";
import FlexBetween from "../structure/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { RootState } from "../../store/store";
import { setLogout } from "../../store/authSlice";
import LogoTransparent from "../../assets/logo_transparent.png";

export const Navbar: React.FC = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const fullName = `${user?.name}`;

  return (
    <FlexBetween padding="1rem 6%" sx={{ backgroundColor: "#f8f9fb" }}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:focus, &:active": {
              color: "#5699db",
            },
            "&:hover": {
              color: "#5699db",
              cursor: "pointer",
            },
          }}
        >
          GamingHub
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          ></FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Link href="">
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: "#1976d2",
                  height: "36px",
                  width: "36px",
                  "&:focus, &:active": {
                    backgroundColor: "#5699db",
                  },
                  "&:hover": {
                    backgroundColor: "#5699db",
                  },
                }}
              >
                <Person />
              </Avatar>
            </IconButton>
          </Link>
          <Button
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              "&:focus, &:active": {
                backgroundColor: "#5699db",
              },
              "&:hover": {
                backgroundColor: "#5699db",
              },
            }}
            onClick={() => dispatch(setLogout())}
          >
            Log Out
          </Button>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          sx={{
            position: "fixed",
            right: "0",
            bottom: "0",
            height: "100%",
            zIndex: "10",
            maxWidth: "500px",
            minWidth: "300px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <img src={LogoTransparent} width={100} alt="Logo"></img>
            <Button
              sx={{
                width: "90%",
                backgroundColor: "#e4edff",
                color: "black",
                "&:focus, &:active": {
                  backgroundColor: "#c9d2e4",
                },
                "&:hover": {
                  backgroundColor: "#c9d2e4",
                },
              }}
              onClick={() => dispatch(setLogout())}
            >
              My Profile
            </Button>
            <Button
              sx={{
                width: "90%",
                backgroundColor: "#e4edff",
                color: "black",
                "&:focus, &:active": {
                  backgroundColor: "#c9d2e4",
                },
                "&:hover": {
                  backgroundColor: "#c9d2e4",
                },
              }}
              onClick={() => dispatch(setLogout())}
            >
              Log Out
            </Button>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};
