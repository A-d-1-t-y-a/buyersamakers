"use client";

import AuthUIComponent from "@/components/AuthComponent";
import { useRouter } from "next/navigation";

function Forgot() {
    const route=useRouter()
    
  return (
    <AuthUIComponent
      title="Forgot password"
      onClick={() => route.push("/")}
      buttonTitle="Save"
    >
      <input
        placeholder="Enter your number"
        type="tel"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Enter OTP"
        type="tel"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Enter your new password"
        type="password"
        disabled={true}
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Re-Enter your password"
        disabled={true}
        type="password"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
    </AuthUIComponent>
  );
}

export default Forgot;
