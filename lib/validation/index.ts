import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(3, { message: "name must be at least 3 characters long." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
});