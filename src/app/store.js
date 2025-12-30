import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "../features/githubThunk/githubSlice";
import { githubApi } from "../features/githubRTKQuery/githhubApi";

export const store = configureStore({
  reducer: {
    github: githubReducer,              // Redux Thunk state
    [githubApi.reducerPath]: githubApi.reducer, // RTK Query state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
