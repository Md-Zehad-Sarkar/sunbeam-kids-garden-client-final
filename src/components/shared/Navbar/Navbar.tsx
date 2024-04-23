"use client";
import Link from "next/link";
import logo from "../../../../public/logo.jpeg";
import Image from "next/image";
import { authInfo, removeUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "@/assets/images/cart.png";
import { useAppSelector } from "@/redux/hooks";
import { useGetCartFromDBQuery } from "@/redux/api/carts/cartsApi";

const Navbar = () => {
  const router = useRouter();
  const { products } = useAppSelector((state) => state.products);
  const { data: cartProducts, isLoading } = useGetCartFromDBQuery({});

  const user = authInfo();

  if (isLoading) {
    return "Loading...";
  }

  //bd product cart
  const userCart = cartProducts?.data?.filter(
    (carts) => carts.email === user?.email
  );

  //persisted product cart
  const productCart = products?.filter((carts) => carts.email === user?.email);

  const handleLogout = () => {
    removeUser();
    router.push("/login");
  };

  const navmenu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/flash-sale">Flash-Sale</Link>
      </li>

      <li>
        <Link href="/about">About-Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact-Us</Link>
      </li>

      {user?.email ? (
        <>
          <>
            {user?.role === "admin" ? (
              <li>
                <Link href="/dashboard/products" className="">
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/dashboard/my-orders" className="">
                  Dashboard
                </Link>
              </li>
            )}
          </>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
      <li className="relative">
        <Link href="/checkout" className="">
          <Image
            src={ShoppingCartIcon}
            alt="cart icon"
            width={20}
            height={20}
          />

          <div className="badge absolute top-[-10px] right-0">
            {productCart?.length || userCart?.length}
          </div>
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navmenu}
          </ul>
        </div>

        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navmenu}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image
              src={user?.image}
              alt="profile image"
              width={200}
              height={200}
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
