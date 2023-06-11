import axios, { AxiosInstance } from "axios";

export const GhDataApi: AxiosInstance = axios.create({
  baseURL: "https://gaminghub-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const setAuth = (user: User | null): void => {
//   const dispatch = useDispatch();
//   console.log("Jestem w auth");
//   if (user) {
//     GhDataApi.defaults.headers.common["Authorization"] = `${user.resetToken}`;
//     dispatch(setLogin({ user: user }));
//     console.log("Logowanie");
//   } else {
//     delete GhDataApi.defaults.headers.common["Authorization"];
//     dispatch(setLogout());
//     console.log("Wylogowanie");
//   }
// };
