import { z } from "zod";


export const resetPasswordSchema = z.object({
    token: z.string('invalid token').nonempty('Token is required'),
   password: z.string('invalid password').nonempty('Your new password is required'),
   confirmPassword: z.string('invalid password').nonempty('Please confirm your new password'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
   

}).strict();