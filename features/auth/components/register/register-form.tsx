"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Eye, EyeOff, House, Briefcase } from "lucide-react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegisterFields } from "../../types/auth";
import { registerSchema } from "../../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "../../hooks/register/use-register";
import AuthButton from "../auth-button";

const ROLES = [
  { value: "buyer", label: "Buyer / Renter", icon: House },
  { value: "agent", label: "Agent", icon: Briefcase },
] as const;

const FIELDS: {
  name: keyof RegisterFields;
  label: string;
  type: string;
  autoComplete: string;
  agentOnly?: boolean;
  placeholder?: string;
  inputMode?: "numeric" | "text";
}[] = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "phone",
    label: "REGA license number",
    type: "tel",
    inputMode: "numeric",
    autoComplete: "tel",
    placeholder: "+966XXXXXXXXX",
    agentOnly: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    autoComplete: "new-password",
  },
];

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<(typeof ROLES)[number]["value"]>("buyer");

  // mutation
  const { mutate: register, isPending, error } = useRegister();

  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFields> = ({ phone, ...rest }) => {
    // phone is sent only if the user typed it
    register({ ...rest, ...(phone?.trim() ? { phone: phone.trim() } : {}) });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      {/* Role */}
      <div className="my-6 grid w-full grid-cols-2 gap-2 sm:my-8">
        {ROLES.map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            type="button"
            aria-pressed={role === value}
            variant={role === value ? "default" : "outline"}
            className="h-auto  flex-col items-start justify-center gap-2 border px-4 py-6 text-sm hover:border-chart-3 sm:px-5 sm:py-8"
            onClick={() => {
              setRole(value);
              // buyer doesn't send a phone, so clear it when switching back
              if (value === "buyer") form.setValue("phone", "");
            }}
          >
            <Icon className="size-5" />
            {label}
          </Button>
        ))}
      </div>

      {/* Fields */}
      <FieldGroup className="gap-5">
        {FIELDS.filter((f) => !f.agentOnly || role === "agent").map((f) => {
          const isPassword = f.name === "password";

          return (
            <Controller
              key={f.name}
              name={f.name}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={f.name}>{f.label}</FieldLabel>

                  <div className="relative">
                    <Input
                      {...field}
                      id={f.name}
                      type={isPassword && showPassword ? "text" : f.type}
                      inputMode={f.inputMode}
                      className={isPassword ? "pe-10" : undefined}
                      aria-invalid={fieldState.invalid}
                      placeholder={f.placeholder}
                      autoComplete={f.autoComplete}
                      disabled={form.formState.isSubmitting}
                    />

                    {isPassword && (
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        aria-pressed={showPassword}
                        className="absolute inset-y-0 inset-e-3 flex items-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    )}
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          );
        })}
      </FieldGroup>

      {error?.message && (
        <p className="my-4 text-center text-sm text-red-500">{error.message}</p>
      )}

      <AuthButton
        title="Create account"
        type="submit"
        disabled={
          isPending || form.formState.isSubmitting || !form.formState.isValid
        }
      />
    </form>
  );
}
