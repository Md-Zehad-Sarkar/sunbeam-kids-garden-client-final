"use client";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import { userLogin } from "@/services/action/userLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await userLogin(data);
      console.log(res);
      if (res.success) {
        toast.success("User Login Successful");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KidsForm onSubmit={onSubmit}>
      <KidsInput type="email" label="Email" name="email" /> <br />
      <KidsInput type="password" label="Password" name="password" /> <br />
      <p>
        Don&rsquo;t have an account?{" "}
        <Link href="/register" className="text-red-400">
          Register
        </Link>
      </p>
      <button type="submit" className="btn btn-ghost w-24 text-xl">
        Login
      </button>
    </KidsForm>
  );
};

export default LoginPage;