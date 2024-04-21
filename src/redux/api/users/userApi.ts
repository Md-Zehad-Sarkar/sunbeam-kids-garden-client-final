import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      }),
    }),

    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      }),
    }),
  }),
});
export const { useCreateUserMutation, useCreateAdminMutation } = userApi;
