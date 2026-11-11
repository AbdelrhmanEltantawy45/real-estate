import AuthFooter from "@/features/auth/components/auth-footer";
import AuthHeader from "@/features/auth/components/auth-header";
import RegisterForm from "@/features/auth/components/register/register-form";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 pb-10 sm:px-10">
      <div className="flex w-full max-w-100 flex-col">
        <AuthHeader
          title="Create your account"
          description="It takes less than a minute."
        />

        <RegisterForm />

        <AuthFooter
          description="Already have an account?"
          link="login"
          linkText="Sign in"
        />
      </div>
    </main>
  );
}
