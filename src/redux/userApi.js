import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/users";
const BASE_URL = "https://64789fa8362560649a2e2627.mockapi.io";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({ url: `${API_ENDPOINT}` }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
