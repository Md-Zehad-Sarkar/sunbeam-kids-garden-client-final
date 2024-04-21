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
        url: "/admin-register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      }),
    }),

    getAllUserFromDB: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return { data: response };
      },
      providesTags: ["users"],
    }),
  }),
});
export const {
  useCreateUserMutation,
  useCreateAdminMutation,
  useGetAllUserFromDBQuery,
} = userApi;
