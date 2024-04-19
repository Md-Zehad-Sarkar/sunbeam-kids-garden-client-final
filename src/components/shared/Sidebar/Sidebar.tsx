import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-base-200">
      <li className="list-none btn btn-ghost">
        <Link href="/">Home</Link>
      </li>
      <li className="list-none btn btn-ghost">
        <Link href="/dashboard/all-products">All Products</Link>
      </li>
    </div>
  );
};

export default Sidebar;
