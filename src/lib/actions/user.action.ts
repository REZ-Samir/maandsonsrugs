import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import bcrypt from "bcryptjs";


interface userParams {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    path: string
}

export async function createUser({ name, email, password, confirmPassword, path }: userParams) {
    try {
        connectToDB();

        if (password !== confirmPassword) {
            throw new Error("Password does not match");
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            throw new Error("User already exists")
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);


        const createUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Failed to create a new user ${error.message}`);
    }
}

export async function loginUser({ email, password, path }: userParams) {
    try {
        connectToDB();

        const loginUser = await User.findOne({ email: email });

        if (!loginUser) {
            throw new Error("Invalid credentials");

        }

        const isPasswordMatch = await bcrypt.compare(password, loginUser.password);

        if (!isPasswordMatch) {
            throw new Error("Invalid credentials");
        }

        return { message: "Login successful", user: loginUser };

    } catch (error: any) {
        throw new Error(`Failed to login user : ${error.message}`);
    }
}