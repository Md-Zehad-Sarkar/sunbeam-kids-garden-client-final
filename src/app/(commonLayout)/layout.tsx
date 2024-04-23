import Footer from "@/components/shared/Footer/Footer";
import { Metadata } from "next";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/shared/Navbar/Navbar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Sunbeam Kids Garden",
  description: "Created by Sunbeam kids garden",
};

const CommonLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <Navbar />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayoutPage;
