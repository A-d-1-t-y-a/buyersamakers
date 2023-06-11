"use client";
import AuthUIComponent from "@/components/AuthComponent";
import { useRouter } from "next/navigation";

function SignUp() {
  const route = useRouter();

  return (
    <AuthUIComponent
      title="Sign Up"
      buttonTitle="Sign Up"
      onClick={() => route.push("/otp")}
    >
      <input
        placeholder="Enter your full name"
        type="text"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Enter your Location"
        type="text"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <input
        placeholder="Enter your Collage if your are student"
        type="text"
        className="bg-slate-300 p-3 px-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
        onChange={() => console.log("aditya")}
      />
      <select
        name="What you want to be"
        className="bg-slate-300 p-4 rounded-2xl text-slate-500 outline-none w-full"
      >
        <option
          className="bg-slate-300 p-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
          value="What you want to be"
        >
          What you want to be
        </option>
        <option
          className="bg-slate-300 p-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
          value="Maker"
        >
          Maker
        </option>
        <option
          className="bg-slate-300 p-4 rounded-2xl placeholder:text-slate-500 outline-none w-full"
          value="Buyer"
        >
          Buyer
        </option>
      </select>
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
    </AuthUIComponent>
  );
}

export default SignUp;
