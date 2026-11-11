import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "At least 8 characters"),
  phone: z.string().optional(),
});