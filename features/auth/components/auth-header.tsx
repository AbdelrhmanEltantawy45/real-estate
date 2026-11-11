import React from "react";

type Props = {
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function AuthHeader({
  className,
  title,
  description,
  children,
}: Props) {
  return (
    <div className={className}>
      {title && (
        <h1 className="font-fraunces  text-xl font-semibold sm:text-3xl">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}