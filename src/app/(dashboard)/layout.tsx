"use client";
// import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { authInfo, isLoggedIn } from "@/services/authService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Sidebar = dynamic(() => import("@/components/shared/Sidebar/Sidebar"), {
  ssr: false,
});

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const user = authInfo();

  const router = useRouter();

  if (!isLoggedIn()) {
    if (typeof window !== "undefined") {
      return router.push("/login");
    }
    return null;
  }

  // if (user.userToken) {
  //   router.push("/login");
  // }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-base-200 w-full max-w-screen shadow-lg mx-auto sticky top-0 z-[9] text-end">
        <div className="avatar">
          {/* <p className="flex justify-end items-center mr-2">{user?.name}</p> */}
          <div className="w-24 rounded-full">
            <Image
              // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              src={user?.image}
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
