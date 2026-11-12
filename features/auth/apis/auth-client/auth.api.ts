
import { HEADERS } from "@/shared/constants/api.constant"
import { ApiResponse } from "@/shared/types/api"
import { ForgotPasswordFields, ForgotPasswordResponse, RegisterFields, RegisterResponse } from "../../types/auth"


export const register = async (values: RegisterFields) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...HEADERS.jsonBody,
    },
  });

  const data: ApiResponse<RegisterResponse> = await response.json();

  return data;
};

export const forgotPassword = async (values: ForgotPasswordFields) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...HEADERS.jsonBody,
    },
  });

  const data: ApiResponse<ForgotPasswordResponse> = await response.json();

  return data;
};

