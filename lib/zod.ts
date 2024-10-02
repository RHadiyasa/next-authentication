import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(1, "Name is should be more than 1 character"),
  email: string().email("Invalid email"),
  password: string()
    .min(8, { message: "Password should be more than 8 characters" })
    .max(32, { message: "Password should be less than 32 characters" }),
  confirmPassword: string()
    // .min(8, { message: "Password should be more than 8 characters" })
    .max(32, { message: "Password should be less than 32 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
