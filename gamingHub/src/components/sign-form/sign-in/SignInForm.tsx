import React from "react";
import { Form, Formik } from "formik";
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
import { LoginCredentials, getLoginEndpoint } from "../../../utils";
import { GhDataApi } from "../../../utils/axiosConfig";

export const SignInForm: React.FC = () => {
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery("(min-width:700px)");

  const initialValuesLogin: LoginCredentials = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),

    password: yup.string().required("required"),
  });

  const onSubmit = (values: LoginCredentials): void => {
    GhDataApi.post(getLoginEndpoint(), values).then((response) =>
      console.log(response)
    );
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <Form>
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
              value={values.email}
              onChange={handleChange}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4", color: "black" }}
            />

            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

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
        </Form>
      )}
    </Formik>
  );
};
