"use client";

import { ForgotPasswordFields } from "../../types/auth";
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

import AuthButton from "../auth-button";
import useForgotPassword from "../../hooks/forgot-password/use-forgot-password";
import { forgotPasswordSchema } from "../../schemas/forgot-password.schema";
import AuthHeader from "../auth-header";
import { MailCheck } from "lucide-react";

export default function ForgotPasswordForm() {
  const {
    mutate: forgotPassword,
    isPending,
    isSuccess,
    variables,
    error,
  } = useForgotPassword();

  const form = useForm<ForgotPasswordFields>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordFields> = (value) => {
    forgotPassword(value);
  };

  if (isSuccess) {
    return (
      <div className="w-full">
        <AuthHeader title="Check your inbox" className="my-5 sm:my-7" />

        <div className="rounded-2xl border bg-accent p-4 sm:p-6">
          <MailCheck className="mb-3 size-6" />
          <p className="text-sm max-w-75 text-muted-foreground sm:text-base">
            In a live app, a reset link would be sent to{" "}
            <span className="break-all font-semibold text-foreground">
              {variables?.email}
            </span>
            . For this demo, continue below.
          </p>
        </div>

        <AuthButton
          type="button"
          link={
            <Link href="/reset-password" className="w-full py-6">
              Open reset page
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <AuthHeader
        title="Forgot your password?"
        description="Enter your email and we'll send you a reset link."
      />

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
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {error?.message && (
          <p className="my-4 text-center text-sm text-red-500">
            {error.message}
          </p>
        )}

        <AuthButton
          title="Send reset link"
          type="submit"
          disabled={
            isPending || form.formState.isSubmitting || !form.formState.isValid
          }
        />

        <div className="py-2 text-center text-sm sm:text-base">
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Back to sign in
          </Link>
        </div>
      </form>
    </div>
  );
}