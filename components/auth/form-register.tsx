"use client";
import Link from "next/link";
import React from "react";
import { signUpCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import { RegisterButton } from "../button";

const FormRegister = () => {
  const [state, formAction] = useFormState(signUpCredentials, null);
  return (
    <form action={formAction} className="space-y-4">
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="Name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.name}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="Email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.password}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm your password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            {state?.error?.confirmPassword}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <RegisterButton />
        <p className="text-sm font-light text-gray-500">
          Already have an account?
          <Link
            className="text-sm font-semibold pl-1 text-blue-600 hover:text-blue-800"
            href={"/login"}
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
