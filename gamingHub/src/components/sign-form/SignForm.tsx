import React from "react";
import { SignUpFrom } from "./sign-up";
import { SignInForm } from "./sign-in";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LogoTransparent from "../../assets/logo_transparent.png";
import { useTheme } from "@emotion/react";

export const SignForm: React.FC = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{
        component: "div",
        width: "100%",
        p: "2rem auto",
        m: "2rem auto",
        borderRadius: "1rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <img src={LogoTransparent} width={100}></img>
      <Typography
        fontFamily="Orbitron"
        fontWeight="500"
        variant="h5"
        sx={{ mb: "1.5rem" }}
      >
        Sign in to GamingHub
      </Typography>
      <SignInForm />
      --- OR ---
      <SignUpFrom />
    </Box>
  );
};
