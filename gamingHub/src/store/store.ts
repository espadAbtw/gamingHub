import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./authSlice";

import storage from "redux-persist/lib/storage";

import { postReducer } from "./postSlice";
import persistReducer from "redux-persist/es/persistReducer";

const persistedConfig = { key: "root", storage, version: 1 };

export const persistedReducer = (reducers: any) =>
  persistReducer(persistedConfig, reducers);

const store = configureStore({
  reducer: persistReducer({
    user: authReducer,
    posts: postReducer,
  }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
