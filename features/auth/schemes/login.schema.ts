import { z } from "zod"

export const loginSchema = z.object({
    email: z.string("invalid email").nonempty("Email is required"),
    password: z.string("invalid password").nonempty("Password is required"),
}).strict();