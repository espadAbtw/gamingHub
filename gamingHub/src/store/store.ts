import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import AppThunk from "redux-thunk";
import { authSlice } from "./authSlice";
import { useSelector } from "react-redux";
import postSlice, { postReducer } from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
