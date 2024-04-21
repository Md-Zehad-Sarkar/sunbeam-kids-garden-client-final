"use client";
import ShippingAddress from "@/components/UI/Checkout/ShippingAddress";
import { useGetCartFromDBQuery } from "@/redux/api/carts/cartsApi";
import { TProduct } from "@/types/products.type";
import Image from "next/image";

const CheckoutPage = () => {
  const { data: products, isLoading } = useGetCartFromDBQuery({});
  const shippingCharge = 15;
  const payTax = 0.15;
  if (isLoading) {
    return "Loading...";
  }

  //get total cart items
  const totalItems = products?.data?.reduce(
    (acc, current) => acc + current?.quantity,
    0
  );

  //get total cart items price
  const totalCost = products?.data?.reduce((acc, current) => {
    const itemTotal = Number(current.price) * current.quantity;
    return acc + itemTotal;
  }, 0);

  const beforeTaxTotalPrice = totalCost && totalCost + shippingCharge;

  const totalTax =
    beforeTaxTotalPrice && (beforeTaxTotalPrice * payTax).toFixed(2);

  const orderTotalPriceWithTax =
    beforeTaxTotalPrice &&
    totalTax &&
    beforeTaxTotalPrice + parseFloat(totalTax);

  const handleProceedToCheckout = () => {
    console.log("checkout");
  };

  return (
    <div className="mb-4">
      <h1>Cart page will load here</h1>
      <div className="md:grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-slate-400">
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
                {products?.data?.map((product: TProduct) => (
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
        </div>
        <div className="col-span-4 bg-gray-300 shadow-md p-2 rounded-t-md mt-4">
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

          <button
            onClick={handleProceedToCheckout}
            className="btn btn-primary w-full rounded-badge my-3"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>

      <ShippingAddress />
    </div>
  );
};

export default CheckoutPage;
