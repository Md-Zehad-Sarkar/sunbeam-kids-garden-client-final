import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.jpeg";

const Footer = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav className="">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full w-12 h-12"
          />
          <h6 className="text-lg">Sunbeam Kids Garden</h6>
          <p>Jamuna Future Park, 2nd Floor</p>
          <p className="text-xl">
            &copy;2024 <span>All rights reserved.</span>{" "}
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Services</h6>
          <li className="list-none">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none">
            <Link href="/products">Trending-Products</Link>
          </li>
          <li className="list-none">
            <Link href="/products">Categories</Link>
          </li>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Company</h6>
          <li className="list-none">
            <Link href="/about">About-Us</Link>
          </li>
          <li className="list-none">
            <Link href="/contact">Contact-Us</Link>
          </li>
          <li className="list-none">
            <Link href="/contact">Customer-Care</Link>
          </li>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Legal</h6>
          <Link href="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/cookie" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
