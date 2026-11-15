"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import UseResetPassword from "../../hooks/reset-password/use-reset-password";
import { ResetPasswordFields } from "../../types/auth";
import { resetPasswordSchema } from "../../schemas/reset-password.schema";
import AuthButton from "../auth-button";

type token = {
  token: string;
};

export default function ResetPasswordForm({ token }: token) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // mutation
  const { mutate: resetPassword, isPending, error } = UseResetPassword();

  const form = useForm<ResetPasswordFields>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
  });
  console.log("token", token);

  const onSubmit: SubmitHandler<ResetPasswordFields> = (value) => {
    resetPassword(value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      {/* New Password */}
      <FieldGroup className="pt-5 pb-3 sm:pt-6">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="NewPassword">New Password</FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  className="border pe-10"
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  aria-invalid={fieldState.invalid}
                  placeholder=""
                  disabled={form.formState.isSubmitting}
                  autoComplete="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 inset-e-3 flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      {/* Confirm Password */}
      <FieldGroup className="pt-5 pb-3 sm:pt-6">
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  className="border pe-10"
                  type={showConfirmPassword ? "text" : "password"}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder=""
                  disabled={form.formState.isSubmitting}
                  autoComplete="password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  aria-pressed={showConfirmPassword}
                  className="absolute inset-y-0 inset-e-3 flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {error?.message && (
        <p className="my-4 text-center text-sm text-red-500">{error.message}</p>
      )}
      <AuthButton
        title="Sign in"
        type="submit"
        disabled={
          isPending || form.formState.isSubmitting || !form.formState.isValid
        }
      />
    </form>
  );
}
