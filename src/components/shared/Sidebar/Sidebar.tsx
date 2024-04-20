"use client";
import { authInfo } from "@/services/authService";
import Link from "next/link";

const Sidebar = () => {
  const user = authInfo();
  console.log(user);
  return (
    <div className="bg-base-200">
      {user.role === "admin" ? (
        <>
          {" "}
          <li className="list-none ml-2  w-full">
            <Link href="/">Home</Link>
          </li>
          <br />
          <li className="list-none ml-2 w-full ">
            <Link href="/dashboard/products">Products</Link>
          </li>{" "}
          <br />
          <li className="list-none ml-2 w-full ">
            <Link href="/dashboard/products/add-products">Add Products</Link>
          </li>{" "}
          <br />
          <li className="list-none ml-2 w-full ">
            <Link href="/dashboard/orders">Manage Order</Link>
          </li>
        </>
      ) : (
        <>
          {/* <li className="list-none ml-2 w-full ">
        <Link href="/dashboard/all-products">All Products</Link>
      </li> */}
          <li className="list-none ml-2  w-full">
            <Link href="/">Home</Link>
          </li>

          <br />
          <li className="list-none ml-2 w-full ">
            <Link href="/dashboard/my-orders">My Order</Link>
          </li>
        </>
      )}
    </div>
  );
};

export default Sidebar;
