import { loginSchema } from "../schemes/login.schema";
import { User } from "./user";
import { z } from "zod";


export type LoginFields = z.infer<typeof loginSchema>
export interface LoginResponse {
    user: User,
    accessToken: string,
}