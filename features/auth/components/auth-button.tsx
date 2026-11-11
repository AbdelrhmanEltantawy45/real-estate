import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  link?: React.ReactNode;
};

export default function AuthButton({
  className,
  title,
  disabled,
  type,
  link,
}: Props) {
  return (
    <Button
      className={`${className} my-5 w-full py-6`}
      disabled={disabled}
      type={type}
    >
      {link}
      {title}
    </Button>
  );
}
