import "server-only"

import { HEADERS } from "@/shared/constants/api.constant"
import { ApiResponse } from "@/shared/types/api"
import { LoginFields, LoginResponse } from "../types/auth"

export const login = async(LoginFields: LoginFields) => {
    const response = await fetch(`${process.env.API}/auth/login` , {
        method: "POST",
        body: JSON.stringify(LoginFields),
        headers: {
            ...HEADERS.jsonBody,
        }
        
    })

    const payload : ApiResponse<LoginResponse> = await response.json()

    return payload

}