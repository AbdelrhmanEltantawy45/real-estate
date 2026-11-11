import { loginSchema } from "../schemas/login.schema";
import { registerSchema } from "../schemas/register.schema";
import { User } from "./user";
import { z } from "zod";


export type LoginFields = z.infer<typeof loginSchema>

export type RegisterFields = z.infer<typeof registerSchema>
export interface LoginResponse {
    user: User,
    accessToken: string,
}

export interface RegisterResponse {
  user: IUser;
  accessToken: string;
}

