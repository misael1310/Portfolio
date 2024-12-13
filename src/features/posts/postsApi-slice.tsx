import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostPageData } from "../../pages/PostPage/postTypes";

const baseUrl = import.meta.env.VITE_API_URL as string;

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostPageData[], string>({
      query: () => "posts",
    }),
    fetchPostByID: builder.query<PostPageData, string>({
      query: (postID: string) => ({ url: `post/${postID}` }),
    }),
  }),
});

export const { useFetchPostsQuery, useFetchPostByIDQuery } = postsApi;
