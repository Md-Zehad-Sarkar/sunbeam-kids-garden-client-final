"use client";
import KidsFileInput from "@/forms/KidsFileInput";
import KidsForm from "@/forms/KidsForm";
import KidsInput from "@/forms/KidsInput";
import { registerUser } from "@/services/action/registerUser";
import { userLogin } from "@/services/action/userLogin";
import { authService } from "@/services/authService";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

//for image hosting img bb
const image_hosting_api = "2223ec610998a850d27bf0a27225a987";

const api_url = "https://api.imgbb.com/1/upload";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    data.role = "user";
    try {
      const obj = { ...data };
      const file = obj["image"];
      delete obj["image"];

      const formData = new FormData();
      formData.append("image", file);

      // image hosting and get url
      const response = await axios.post(api_url, formData, {
        params: { key: image_hosting_api },
      });

      // extract image url from response
      const imageUrl = response.data?.data?.display_url;

      const userObj = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: imageUrl,
        role: data.role,
      };

      const res = await registerUser(userObj);

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
      <KidsFileInput label="Profile Picture" name="image" /> <br />
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
