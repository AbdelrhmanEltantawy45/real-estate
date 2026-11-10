import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  description: string;
  link: string;
  linkText: string;
};

export default function AuthFooter({
  className = "",
  description,
  link,
  linkText,
}: Props) {
  return (
    <div className={`${className} py-3`}>
      <p className="text-center text-sm text-muted-foreground sm:text-base">
        {description}{" "}
        <Link
          href={link}
          className="font-semibold text-primary hover:underline"
        >
          {linkText || "here"}
        </Link>
      </p>
    </div>
  );
}