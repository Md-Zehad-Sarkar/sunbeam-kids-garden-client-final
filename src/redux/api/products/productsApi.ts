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
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
