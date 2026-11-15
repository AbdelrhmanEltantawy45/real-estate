import AuthHeader from "@/features/auth/components/auth-header";
import ResetPasswordForm from "@/features/auth/components/forgot-password/reset-password-form";
import React from "react";

type Props = {
  searchParams: Promise<{ token?: string }>;
};
export default async function page({ searchParams }: Props) {
  const { token } = await searchParams;

  console.log("token", token);
  return (
    <div className="flex w-full max-w-100 flex-col">
      <AuthHeader title="Set a new password" />

      <ResetPasswordForm token={token ?? ""} />
    </div>
  );
}
