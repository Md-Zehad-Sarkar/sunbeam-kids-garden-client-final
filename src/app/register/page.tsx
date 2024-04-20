"use client";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import { registerUser } from "@/services/action/registerUser";
import { userLogin } from "@/services/action/userLogin";
import { authService } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await registerUser(data);

      if (res?.success) {
        toast.success("User Register Successful");
      }

      const result = await userLogin({
        email: data.email,
        password: data.password,
      });

      if (result?.token) {
        authService(result.token);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <KidsForm onSubmit={onSubmit}>
      <KidsInput type="text" label="Name" name="name" /> <br />
      <KidsInput type="email" label="Email" name="email" /> <br />
      <KidsInput type="password" label="Password" name="password" /> <br />
      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-red-400">
          Login
        </Link>
      </p>
      <button type="submit" className="btn btn-ghost w-24 text-xl">
        Register
      </button>
    </KidsForm>
  );
};

export default RegisterPage;
