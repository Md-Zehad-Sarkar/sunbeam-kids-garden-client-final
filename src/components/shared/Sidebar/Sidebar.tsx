import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-base-200">
      <li className="list-none ml-2  w-full">
        <Link href="/">Home</Link>
      </li>
      <br />
      <li className="list-none ml-2 w-full ">
        <Link href="/dashboard/products">Products</Link>
      </li> <br />
      <li className="list-none ml-2 w-full ">
        <Link href="/dashboard/products/add-products">Add Products</Link>
      </li>
      {/* <li className="list-none ml-2 w-full ">
        <Link href="/dashboard/all-products">All Products</Link>
      </li> */}
    </div>
  );
};

export default Sidebar;
