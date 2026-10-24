import Image from "next/image";
import SignInFormClient from "@/features/auth/components/signin-form-client";

//login page

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center space-y-6 justify-center min-h-screen bg-zinc-800">
      <Image src="/logo.svg" alt="Logo Image" height={300} width={300} />
      <SignInFormClient />
    </div>
  );
};

export default SignInPage;