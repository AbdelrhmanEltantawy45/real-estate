import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { ResetPasswordFields } from '../../types/auth'
import { useRouter } from 'next/navigation';
import { resetPassword } from '../../apis/auth-client/auth.api';
import { AnyARecord } from 'node:dns';

export default function UseResetPassword() {
  const router = useRouter();


  return useMutation({
    mutationFn: async (field: ResetPasswordFields) => {
      const response = await resetPassword(field)

       if (!response?.success) {
        throw new Error(response?.message || "Something went wrong");
      }

      return response;

    },
        onSuccess: () => {
      const callbackUrl =
        new URLSearchParams(location.search).get("callbackUrl") ||
        "/verify-email";
      router.push(callbackUrl);
    },
  })
}
