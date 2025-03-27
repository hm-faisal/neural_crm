"use server";

import { prisma } from "@/db/prisma";
import { Role } from "@prisma/client";

export const signUpAction = async (email: string, role: Role) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        role,
      },
    });

    return user;
  } catch (error) {
    return "User Already exist";
  }
};

export const findUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
