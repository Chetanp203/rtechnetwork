// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/lib/prisma";
import bcrypt from "bcryptjs";

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create a new user with the default role of 'USER'
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER", // Always default to 'USER'
      },
    });
    return res.status(201).json({ message: "User registered", user });
  } catch {
    return res.status(500).json({ message: "Error registering user" });
  }
};

export default registerHandler;
