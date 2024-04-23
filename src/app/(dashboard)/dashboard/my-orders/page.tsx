"use client";

import { useGetAllUserOrdersQuery } from "@/redux/api/orders/ordersApi";
import { authInfo } from "@/services/authService";

const UserMyOrdersPage = () => {
  const { data: orders, isLoading } = useGetAllUserOrdersQuery({});
  const user = authInfo();
  if (isLoading) {
    return "";
  }

  const userOrders = orders?.filter(
    (order: Record<string, any>) => order?.email === user?.email
  );

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-2xl font-medium">Qty</th>
            <th className="text-2xl font-medium">price</th>
            <th className="text-2xl font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {userOrders?.map((order: Record<string, any>) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMyOrdersPage;
