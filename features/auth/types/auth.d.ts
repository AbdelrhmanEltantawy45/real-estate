import { forgotPasswordSchema } from "../schemas/forgot-password.schema";
import { loginSchema } from "../schemas/login.schema";
import { registerSchema } from "../schemas/register.schema";
import { User } from "./user";
import { z } from "zod";


export type LoginFields = z.infer<typeof loginSchema>

export type RegisterFields = z.infer<typeof registerSchema>
export type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>


export interface LoginResponse {
    user: User,
    accessToken: string,
}

export interface RegisterResponse {
  user: IUser;
  accessToken: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
   message: string;
   data: {}
}



