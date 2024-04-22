import { baseApi } from "../baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orderCheckout: builder.mutation({
      query: (data) => ({
        url: "/checkout",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const { useOrderCheckoutMutation } = ordersApi;
