import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { LoginCredentials } from "../../../utils/types/forms";
import { GhDataApi } from "../../../utils/axiosConfig";
import { getLoginEndpoint } from "../../../utils";

export const SignUpForm: React.FC = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:700px)");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValuesLogin = {
    name: "",
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    name: yup.string().required("required"),
  });


  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
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
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 4" }}
            />

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
