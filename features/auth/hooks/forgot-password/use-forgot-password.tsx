import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordFields } from "../../types/auth";
import { forgotPassword } from "../../apis/auth-client/auth.api";

export default function useForgotPassword() {
  //Mutation
  return useMutation({
    mutationFn: async (field: ForgotPasswordFields) => {
      const response = await forgotPassword(field);

      if (!response?.success) {
        throw new Error(response?.message || "Something went wrong");
      }

      return response;
    },

   
  });
}