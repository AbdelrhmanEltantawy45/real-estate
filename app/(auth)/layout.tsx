import AuthSideSection from "@/features/auth/components/auth-side-section";
import LogoElement from "@/features/components/logo-element";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex min-h-screen flex-col">
        <LogoElement className="bg-primary" houseIconClassName="text-gold" />
        {children}
      </div>

      <AuthSideSection />
    </div>
  );
}