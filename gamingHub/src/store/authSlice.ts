import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../utils/types/user";

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
export const { setLogin, setLogout, addFriend } = authSlice.actions;
export default authSlice.reducer;
