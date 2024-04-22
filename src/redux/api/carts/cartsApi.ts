import { TProduct } from "@/types/products.type";
import { baseApi } from "../baseApi";

const cartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCartToDB: builder.mutation({
      query: (data) => ({
        url: "/carts",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data,
      }),
      invalidatesTags: ["carts"],
    }),

    getCartFromDB: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
      transformResponse: (response: TProduct[]) => {
        return {
          data: response,
        };
      },
      providesTags: ["carts"],
    }),

    getSingleCartFromDB: builder.query({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "GET",
      }),
      providesTags: ["carts"],
    }),

    deleteCartFromDB: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],
    }),

    deleteAllCartFromDB: builder.mutation({
      query: (email) => {
        return {
          url: `/delete-carts/${email}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["carts"],
    }),
  }),
});

export const {
  useAddToCartToDBMutation,
  useGetCartFromDBQuery,
  useGetSingleCartFromDBQuery,
  useDeleteCartFromDBMutation,
  useDeleteAllCartFromDBMutation,
} = cartsApi;
