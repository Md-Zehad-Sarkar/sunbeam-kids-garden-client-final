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

    getAllUserOrders: builder.query({
      query: () => ({
        url: "/my-orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),

    getAdminOrders: builder.query({
      query: () => ({
        url: "/admin-orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),

    //order status update
    orderStatusUpdate: builder.mutation({
      query: (id) => ({
        url: `/update-status-orders/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useOrderCheckoutMutation,
  useGetAllUserOrdersQuery,
  useGetAdminOrdersQuery,
  useOrderStatusUpdateMutation,
} = ordersApi;
