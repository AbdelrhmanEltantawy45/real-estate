import AuthFooter from "@/features/auth/components/auth-footer";
import AuthHeader from "@/features/auth/components/auth-header";
import LoginForm from "@/features/auth/components/login/login-form";

export default function page() {
  return (
      <div className="flex w-full max-w-100 flex-col">
        <AuthHeader
          title="Welcome back"
          description="Sign in to continue to your account."
        />

        <LoginForm />

        <div className="my-4 flex items-center gap-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          Quick demo access
        </div>

        <AuthFooter
          description="New to Maskan?"
          link="register"
          linkText="Create an account"
        />
      </div>
  );
}