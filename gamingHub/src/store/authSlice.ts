import { createSlice } from "@reduxjs/toolkit";
export type user = {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  resetToken: string;
};
const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    addFriend: (state, action) => {
      if (state.user) {
        state.user.friends.push(action.payload.friends);
      }
    },
  },
});
