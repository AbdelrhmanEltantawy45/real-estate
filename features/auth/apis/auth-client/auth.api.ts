
import { HEADERS } from "@/shared/constants/api.constant"
import { ApiResponse } from "@/shared/types/api"
import { RegisterFields, RegisterResponse } from "../../types/auth"


export const register = async (values: RegisterFields) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      ...HEADERS.jsonBody,
    },
  });
  console.log("responscdmc d fkndgnkkndfgnkfnkgfnk", values);

  const data: ApiResponse<RegisterResponse> = await response.json();

  return data;
};