"use client";
import { authInfo } from "@/services/authService";
import Link from "next/link";

const Sidebar = () => {
  const user = authInfo();
  const roleMenu = [];

  switch (user?.role) {
    case "admin":
      roleMenu.push(
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
      );
      break;
    case "user":
      roleMenu.push(
        <>
          <li className="list-none ml-2  w-full">
            <Link href="/">Home</Link>
          </li>

          <br />
          <li className="list-none ml-2 w-full ">
            <Link href="/dashboard/my-orders">My Order</Link>
          </li>
        </>
      );
    default:
      break;
  }

  return [...roleMenu];
};

export default Sidebar;
