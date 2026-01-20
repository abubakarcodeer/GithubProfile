import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/",
     prepareHeaders: (headers) => {
    headers.set("Authorization", ``); // add token
    return headers;
     }
   }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (username) => `users/${username}`,
    }),
  }),
});

export const { useGetUserQuery } = githubApi;
