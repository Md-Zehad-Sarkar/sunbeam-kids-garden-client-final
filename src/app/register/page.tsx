"use client";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
