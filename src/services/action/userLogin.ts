"use server";
import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  console.log("login dta", data);
  const res = await fetch(`${process.env.SERVER_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const userInfo = await res.json();
  return userInfo;
};
