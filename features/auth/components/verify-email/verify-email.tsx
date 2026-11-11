import { Button } from "@/shared/components/ui/button";
import { MailOpen } from "lucide-react";
import React from "react";
import AuthButton from "../auth-button";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <div className=" max-w-sm ">
      <div className="rounded-2xl border p-6 text-center">
        <div className="bg-accent mx-auto h-14 w-14 place-items-center rounded-full flex items-center justify-center ">
          <MailOpen />
        </div>
        <p className="mt-4 text-muted-foreground">
          In a live app we'd send a confirmation link to
          <b className="text-foreground"> abdelrhmanelta949@gmail.com.</b> This
          demo doesn't send emails.
        </p>
        <Button className="inline-flex items-center justify-center text-gray-700 font-semimebold gap-2 whitespace-nowrap rounded-lg text-sm  cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-secondary hover:text-secondary-foreground h-10 px-4 py-2 mt-6">
          Resend email
        </Button>
      </div>

      <AuthButton
        type="submit"
        link={<Link href="/login" className="w-full py-6">Continue to sign in</Link>}   
      />
    </div>
  );
}
