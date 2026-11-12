import { z } from "zod"

export const forgotPasswordSchema = z.object({
    email: z.string("invalid email").nonempty("Email is required"),
}).strict();