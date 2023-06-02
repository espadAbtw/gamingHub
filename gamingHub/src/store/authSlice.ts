import { createSlice } from "@reduxjs/toolkit";

export type user = {
  _id: string;
  name: string;
  email: string;
  password: string;
  friends: string[];
  resetToken: string;
};

type authState = {
  user: user | null;
};

const initialState: authState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
    addFriend: (state, action) => {
      if (state.user) {
        state.user.friends.push(action.payload.friend);
      }
    },
  },
});
