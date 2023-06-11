"use client";
import { useRouter } from "next/navigation";
import AuthComponent from "@/components/AuthComponent";

function OTP() {
  const route = useRouter();
  return (
    <AuthComponent
      title="OTP verification"
      onClick={() => route.push("/")}
      buttonTitle="Verify"
    >
      <input
        placeholder="Enter your otp"
        type="tel"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
    </AuthComponent>
  );
}

export default OTP;
