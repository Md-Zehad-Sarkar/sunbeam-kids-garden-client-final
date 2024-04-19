"use client";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
