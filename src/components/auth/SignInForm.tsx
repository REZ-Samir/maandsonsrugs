"use client"
import { useRouter } from "next/navigation";
import React from "react";

function SignInForm() {
  const router = useRouter();
  const handleSignIn = () => {
    // setTimeout(() => {
      router.push("/dashboard");
    // }, 1000);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-white p-10">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form action={handleSignIn} >
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

            {/* <div className="flex justify-between items-center text-sm mb-6">
          
            <a href="#" className="text-purple-600">
              Forgot password
            </a>
          </div> */}

            <button
              className="w-full bg-purple-600 text-white py-3 rounded-lg mb-4"
            //   onClick={() => handleSignIn()}
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-sm mt-2">
            Don't have an account?{" "}
            <a href="#" className="text-purple-600">
              Sign up
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-gray-50 flex items-center justify-center relative">
          <div className="absolute w-32 h-32 bg-purple-600 rounded-full shadow-xl top-50 left-50"></div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
