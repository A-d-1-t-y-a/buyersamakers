"use client";

import { useRouter } from "next/navigation";

import AuthUIComponent from "@/components/AuthComponent";

function SignInPage() {
  const route = useRouter();
  return (
    <AuthUIComponent
      title="Sign In"
      buttonTitle="Sign In"
      belowButton={
        <p className="text-zinc-500">
          do you want to create account?{" "}
          <span
            className="text-blue-500 font-medium hover:border-b border-blue-500"
            onClick={() => route.push("/signup")}
          >
            Sign up
          </span>
        </p>
      }
    >
      <input
        placeholder="Enter your number"
        type="tel"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Enter your password"
        type="password"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <button className="text-blue-500 font-medium" onClick={()=>route.push("/forgot")}>Forgot password</button>
    </AuthUIComponent>
  );
}

export default SignInPage;
