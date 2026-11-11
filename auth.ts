import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./features/auth/apis/auth-server/auth.api";
import { loginSchema } from "./features/auth/schemas/login.schema";
import { Session } from "inspector/promises";


export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login"
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {

                const result = loginSchema.safeParse({email: credentials?.email, password: credentials?.password});
                if (!result.success) throw new Error("invalid email or password");

                const payload = await login(result.data)
                if(!payload.success) throw new Error(payload.message)

                  return {
                    id: payload.data.user.id,
                    user: payload.data.user,
                    token: payload.data.accessToken
                  }
                
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if(user) {
                token.user = user.user;
                token.token = user.token;
            }
 
            return token
        },
        session: ({session , token}) => {
            session.user = token.user;

            return session;
        }
    }  
}    



