import { baseApi } from "../baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReviewToDB: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data,
      }),
      invalidatesTags: ["reviews"],
    }),

    getAllReviewsFromDB: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response,
        };
      },
      providesTags: ["reviews"],
    }),

    getSingleReviewsFromDB: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),

    deleteReviewsFromDB: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useAddReviewToDBMutation,
  useGetAllReviewsFromDBQuery,
  useGetSingleReviewsFromDBQuery,
  useDeleteReviewsFromDBMutation,
} = reviewsApi;
