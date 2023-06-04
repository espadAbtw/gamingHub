import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../utils/types/post";
import { GhDataApi } from "../utils/axiosConfig";
import { getPostsEndpoint } from "../utils";

type PostState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
  const response = await GhDataApi.get(getPostsEndpoint());
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllPosts.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          state.posts = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = postSlice.actions;

export const postReducer = postSlice.reducer;

export default postReducer;
