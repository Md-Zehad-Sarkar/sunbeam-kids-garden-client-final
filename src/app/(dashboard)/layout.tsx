import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sunbeam kids garden user dashboard",
};
const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-base-200 w-full max-w-screen shadow-lg mx-auto sticky top-0 z-[9] text-end">
        <div className="avatar">
          <p className="flex justify-end items-center mr-2">title</p>
          <div className="w-24 rounded-full">
            <Image
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="profile image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-base-200 shadow-lg h-screen sticky top-16 z-10">
          <Sidebar />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
