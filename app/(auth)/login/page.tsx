import LoginForm from "@/features/auth/components/login/login-form";
import Link from "next/link";


export default function page() {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-10">
    <div className="w-full max-w-113 flex flex-col gap-10">
          <h1 className=" text-2xl font-fraunces">Welcome back </h1>
        <p className="">Sign in to continue to your account.</p>

        <LoginForm />

        <p>Quick demo access</p>

      
      <h1 className=" text-red-500 "> New to Maskan?<Link href={"regiser"}>Create an account</Link></h1>  
    </div>
        
    </main>
  )
}
