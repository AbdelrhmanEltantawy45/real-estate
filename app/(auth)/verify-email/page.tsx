import AuthFooter from "@/features/auth/components/auth-footer";
import AuthHeader from "@/features/auth/components/auth-header";
import VerifyEmail from "@/features/auth/components/verify-email/verify-email";
import React from "react";

export default function page() {
  return (
    <div className="flex w-full max-w-sm flex-col">
      <AuthHeader className="my-7" title="Verify your email" />
      <VerifyEmail />
    </div>
  );
}
