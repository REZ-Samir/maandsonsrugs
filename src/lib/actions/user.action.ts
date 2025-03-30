"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface userParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  path: string;
}

const JWT_SECRET = "jygjyftdhjgbjyfvgufgrhgdhc";

function generateToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

export async function createUser({
  name,
  email,
  password,
  confirmPassword,
}: Partial<userParams>) {
  try {
    connectToDB();

    if (password == null) {
      throw new Error("Password is required");
    }

    if (password !== confirmPassword) {
      throw new Error("Password does not match");
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password!, salt);

    const createUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const token = generateToken(createUser._id.toString());
    const user = JSON.parse(JSON.stringify(createUser));

    return { message: "User created successfully", user: user, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create a new user ${error.message}`);
    }
    throw new Error("Failed to create a new user due to an unknown error");
  }
}

export async function loginUser({ email, password }: Partial<userParams>) {
  try {
    connectToDB();

    if (password == null) {
      throw new Error("Password is required");
    }

    const loginUser = await User.findOne({ email: email });

    if (!loginUser) {
      throw new Error("Invalid credentials");
    }

    const isPasswordMatch = await bcrypt.compare(password!, loginUser.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(loginUser._id.toString());
    const user = JSON.parse(JSON.stringify(loginUser));

    return { message: "Login successful", user: user, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to login user : ${error.message}`);
    }
    throw new Error("Failed to login user due to an unknown error");
  }
}

export async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Invalid or expired token : ${error.message}`);
    }
    throw new Error("Invalid or expired token");
  }
}
