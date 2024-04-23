import { baseApi } from "../baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return { data: response };
      },
      providesTags: ["products"],
    }),

    //get single products
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/single-products/${id}`,
        method: "GET",
      }),

      providesTags: ["products"],
    }),

    //add products
    addProducts: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data,
        };
      },
      invalidatesTags: ["products"],
    }),

    //delete products
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    //update products
    updateProducts: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update-products/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductsMutation,
  useUpdateProductsMutation,
  useAddProductsMutation,
  useGetSingleProductsQuery,
} = productsApi;
