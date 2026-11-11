"use client";

import { useState } from "react";
import { LoginFields } from "../../types/auth";
import { loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import Link from "next/link";
import useLogin from "../../hooks/login/use-login";
import { Button } from "@/shared/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // mutation
  const { mutate: login, isPending, error } = useLogin();

  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = (value) => {
    login(value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      {/* Email */}
      <FieldGroup className="mt-6 sm:mt-8">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder=""
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {/* Password */}
      <FieldGroup className="pt-5 pb-3 sm:pt-6">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  className="border pe-10"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder=""
                  disabled={form.formState.isSubmitting}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 end-3 flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Link
        href="forgot-password"
        className="flex justify-end text-sm font-manrope text-primary hover:underline sm:text-base"
      >
        forgot password?
      </Link>

      {error?.message && (
        <p className="my-4 text-center text-sm text-red-500">{error.message}</p>
      )}

      <Button
        disabled={
          isPending || form.formState.isSubmitting || !form.formState.isValid
        }
        type="submit"
        className="my-3 w-full py-6"
      >
        Sign in
      </Button>
    </form>
  );
}