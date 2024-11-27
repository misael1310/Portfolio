import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../features/posts/postsApi-slice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApi.middleware);
  },
});
