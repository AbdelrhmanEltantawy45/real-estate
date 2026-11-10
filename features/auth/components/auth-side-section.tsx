import Image from "next/image";
import React from "react";
import imageUrl from "@/assets/images/auth/hero.jpg";

export default function AuthSideSection() {
  return (
    <section className="sticky top-0 hidden h-screen w-full lg:block">
      <Image
        src={imageUrl}
        alt="Authentication"
        fill
        priority
        sizes="50vw"
        className="object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0 font-fraunces" />

      <blockquote className="absolute inset-s-8 inset-e-8 bottom-8 font-display font-fraunces text-2xl text-primary-foreground xl:inset-s-12 xl:inset-e-12 xl:bottom-12 xl:text-3xl">
        "We found our family home in two weeks — the agent knew every street in
        Al Malqa."
        <footer className="mt-3 font-fraunces text-sm text-primary-foreground/75">
          — Sara, Riyadh
        </footer>
      </blockquote>
    </section>
  );
}