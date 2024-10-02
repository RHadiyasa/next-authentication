"use client";
import { useFormStatus } from "react-dom";

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full text-white bg-blue-400 font-medium rounded-lg px-5 py-2.5 text-center hover:bg-blue-600"
      disabled={pending}
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};
