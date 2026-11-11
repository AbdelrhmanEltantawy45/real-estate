import React from 'react'
import { LoginFields } from '../../types/auth'
import { signIn } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';

export default function useLogin() {
  return useMutation({
    mutationFn: async (field: LoginFields) =>{
        const response = await signIn('credentials', {
            email: field.email,
            password: field.password,
            redirect: false,
        });

        if (!response?.ok)  throw new Error(response?.error || "something went wrong");


    

        return response;
    },
    onSuccess: () => {
        const callbackUrl = (new URLSearchParams(location.search)).get("callbackUrl") || "/";
        location.href = callbackUrl;
        }
  })
}
