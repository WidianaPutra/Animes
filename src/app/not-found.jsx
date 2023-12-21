"use client";
import notFoundIcon from "@/assets/icons/not-found.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const back = () => router.back();

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <div className="flex items-center h-20">
        <Image src={notFoundIcon} height={60} width={60} alt=".." />
        <h1 className="text-white text-xl px-1">Not Found</h1>
      </div>
      <button className="text-white text-xl hover:underline" onClick={back}>
        Back
      </button>
    </div>
  );
}
