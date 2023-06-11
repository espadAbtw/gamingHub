import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../utils/types/user";
import { RootState } from "./store";
import { GhDataApi } from "../utils/axiosConfig";
import { Friend } from "../utils";

type AuthState = {
  user: User | null;
  friends: Friend[] | null;
};

const initialState: AuthState = {
  user: null,
  friends: null,
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
      delete GhDataApi.defaults.headers.common["Authorization"];
    },
    addFriend: (state, action) => {
      if (state.user) {
        state.user.friends.push(action.payload.friend);
      }
    },
    setToken: (state) => {
      GhDataApi.defaults.headers.common[
        "Authorization"
      ] = `${state.user?.resetToken}`;
      console.log("seba");
    },
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
});
export const selectUser = (state: RootState) => state.user.user;
export const selectFriends = (state: RootState) => state.user.friends;
export const { setLogin, setLogout, addFriend, setToken, setFriends } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectUserId = (state: RootState) => state.user.user?._id;
export default authSlice.reducer;
