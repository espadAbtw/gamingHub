import axios, { AxiosInstance } from "axios";

export const GhDataApi: AxiosInstance = axios.create({
  baseURL: "https://gaminghub-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null): void => {
  if (token) {
    GhDataApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete GhDataApi.defaults.headers.common["Authorization"];
  }
};
