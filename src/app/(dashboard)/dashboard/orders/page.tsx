"use client";

import {
  useGetAdminOrdersQuery,
  useOrderStatusUpdateMutation,
} from "@/redux/api/orders/ordersApi";

const AdminManageOrdersPage = () => {
  const { data: orders } = useGetAdminOrdersQuery({});
  const [orderStatusUpdate] = useOrderStatusUpdateMutation();

  const handleUpdateStatus = async (id: string) => {
    const res = await orderStatusUpdate(id);
    console.log(res);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-2xl font-medium">Qty</th>
            <th className="text-2xl font-medium">price</th>
            <th className="text-2xl font-medium">Status</th>
            <th className="text-2xl font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order: Record<string, any>) => (
            <tr key={order._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{order?.totalQuantity}</div>
                  </div>
                </div>
              </td>
              <td>{order?.totalPrice}</td>
              <td>{order?.status}</td>
              <td>
                <button
                  onClick={() => handleUpdateStatus(order?._id)}
                  className="btn btn-ghost"
                >
                  Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageOrdersPage;
