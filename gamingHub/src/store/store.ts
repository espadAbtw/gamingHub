import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import AppThunk from "redux-thunk";
import { authSlice } from "./authSlice";

const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
