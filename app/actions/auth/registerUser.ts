"use server";

import { RegisterUserPayload } from "@/types/auth";

export const registerUser = async (payload: RegisterUserPayload) => {
  console.log(payload);

  // send data to db
};
