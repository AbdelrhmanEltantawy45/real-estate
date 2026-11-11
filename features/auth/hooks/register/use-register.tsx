import { useMutation } from "@tanstack/react-query";
import { RegisterFields } from "../../types/auth";
import { register } from "../../apis/auth-client/auth.api";

export default function useRegister() {
  //Mutation
  return useMutation({
    mutationFn: async (field: RegisterFields) => {
      const response = await register(field);

      if (!response?.success) {
        throw new Error(response?.message || "Something went wrong");
      }

      return response;
    },

     onSuccess: () => {
        const callbackUrl = (new URLSearchParams(location.search)).get("callbackUrl") || "/verify-email";
        location.href = callbackUrl;
        }
  });
}