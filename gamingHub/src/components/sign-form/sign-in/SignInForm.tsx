import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

export const SignInForm: React.FC = () => {
  const handleFormSubmit = async () => {};
  const [pageType, setPageType] = useState("register");
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:700px)");

  const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
  };

  const registerSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    name: yup.string().required("required"),
    password: yup.string().required("required"),
  });

  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4", color: "black" }}
            />

            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "rgb(69, 166, 243)",
                color: "white",
                "&:hover": { color: palette.primary.main },
              }}
            >
              Wyslij
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};
