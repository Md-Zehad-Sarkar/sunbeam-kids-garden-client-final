"use client";
import ShippingAddress from "@/components/UI/Checkout/ShippingAddress";
import {
  useDeleteAllCartFromDBMutation,
  useGetCartFromDBQuery,
} from "@/redux/api/carts/cartsApi";
import { useOrderCheckoutMutation } from "@/redux/api/orders/ordersApi";
import { clearProductCart } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { authInfo } from "@/services/authService";
import { TProduct } from "@/types/products.type";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const CheckoutPage = () => {
  //get all data from database
  const { data: cartProducts, isLoading } = useGetCartFromDBQuery({});

  const [orderCheckout] = useOrderCheckoutMutation();

  const [deleteAllCartFromDB] = useDeleteAllCartFromDBMutation();

  const [shipAddress, setShipAddress] = useState({});

  const dispatch = useAppDispatch();

  //users info
  const user = authInfo();

  const userProducts = cartProducts?.data?.filter(
    (product) => product?.email === user?.email
  );

  const shippingCharge = 15;
  const payTax = 0.05;
  if (isLoading) {
    return "Loading...";
  }

  //get total cart items
  const totalItems = userProducts?.reduce(
    (acc, current) => acc + current?.quantity,
    0
  );

  //get total cart items price
  const totalCost = userProducts?.reduce((acc, current) => {
    const itemTotal = Number(current.price) * current.quantity;
    return acc + itemTotal;
  }, 0);

  const beforeTaxTotalPrice = totalCost && totalCost + shippingCharge;

  const totalTax =
    beforeTaxTotalPrice && (beforeTaxTotalPrice * payTax).toFixed(2);

  const orderTotalPriceWithTax =
    beforeTaxTotalPrice &&
    totalTax &&
    (beforeTaxTotalPrice + parseFloat(totalTax)).toFixed(2);

  const handleProceedToCheckout = async () => {
    const checkoutData = {
      email: user?.email,
      name: user?.name,
      shipAddress,
      userProducts,
      status: "pending",
      totalPrice: orderTotalPriceWithTax,
      totalQuantity: totalItems,
    };
    const res = await orderCheckout(checkoutData).unwrap();
    if (res?.insertedId) {
      toast.success("order created successful");
      await deleteAllCartFromDB(user.email);
      dispatch(clearProductCart());
    }
  };

  return (
    <div className="mb-4">
      <h1>Cart page will load here</h1>
      <div className="md:grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-2xl font-medium">Items</th>
                  <th className="text-2xl font-medium">Qty</th>
                  <th className="text-2xl font-medium">price</th>
                </tr>
              </thead>
              <tbody>
                {userProducts?.map((product: TProduct) => (
                  <tr key={product._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={product?.image}
                              alt="product image"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product?.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{product?.quantity}</td>
                    <td>{product?.quantity * Number(product?.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ShippingAddress setShipAddress={setShipAddress} />
        </div>
        <div className="col-span-4 bg-gray-300 shadow-md p-2 rounded-t-md mt-4 h-full max-h-[430px]">
          <p className="text-sm mt-1 mb-2">
            By placing your order, you agree to our company Privacy policy and
            Conditions of use.
          </p>
          <div className="border-b-2 mt-1 mb-2"></div>
          <h1 className="text-2xl px-1">Order Summery</h1>
          <div className="mt-4 px-3">
            <div className="flex justify-between items-center">
              <p>Item ({totalItems})</p>
              <p>{totalCost}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Shipping Charge</p>
              <p>{shippingCharge}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Before Tax</p>
              <p>{beforeTaxTotalPrice}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Tax</p>
              <p>{totalTax}</p>
            </div>
            <div className="border-b-2 mt-1 mb-2 border-black"></div>
            <div className="flex justify-between items-center">
              <p>Order Total Price</p>
              <p>{orderTotalPriceWithTax}</p>
            </div>
          </div>

          <p className="mt-4 text-red-500">
            {Object.keys(shipAddress).length === 0
              ? "Before Proceed To Checkout Filled The Shipping Address"
              : ""}
          </p>
          <button
            onClick={handleProceedToCheckout}
            className="btn btn-primary w-full rounded-badge my-3"
            disabled={Object.keys(shipAddress).length === 0}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
