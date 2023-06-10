import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../utils/types/user";
import { RootState } from "./store";
import { useSelector } from "react-redux";

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<AuthState>) => {
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
export const selectUser = (state: RootState) => state.user.user;
export const { setLogin, setLogout, addFriend } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectLoggedInUserId = (state: AuthState) => state.user?._id;
export default authSlice.reducer;
