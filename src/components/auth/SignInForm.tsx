"use client";
import { useRouter } from "next/navigation";
import React from "react";

function SignInForm() {
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  shadow-xl rounded-xl overflow-hidden">
      <div className=" bg-white p-10">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        <form action={handleSignIn}>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg mb-4"
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 border rounded-lg mb-6"
          />

          <button className="w-full bg-primary text-white py-3 rounded-lg mb-4">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
