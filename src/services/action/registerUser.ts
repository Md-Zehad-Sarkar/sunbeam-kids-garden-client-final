"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.SERVER_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  
  // Check if response is ok
  if (!res.ok) {
    throw new Error(`HTTP error ! status: ${res.status}`);
  }
  const userInfo =await res.json();
  return userInfo;
};
