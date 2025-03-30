"use client";
import { loginUser } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function SignInForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data.email, data.password);

      const response = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log(response);
      localStorage.setItem("token", response.token);
      if (localStorage.getItem("token")) router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-xl rounded-xl overflow-hidden">
      <div className="bg-white p-10">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg mb-2"
            {...register("email", { required: "Email is required" })}
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )} */}

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 border rounded-lg mb-2"
            {...register("password", { required: "Password is required" })}
          />
          {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )} */}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg mt-4"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
