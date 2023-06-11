"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const routes = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => routes.push("/signin")}
        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-red-500 hover:to-teal-500 transition-all duration-1000 ease-in delay-150  rounded-3xl py-2 px-8 font-medium text-white text-lg"
      >
        Went to sign up page
      </button>
    </main>
  );
}
