"use client";
import { useRouter } from "next/navigation";

export default function Back({ condition }) {
  const router = useRouter();
  return (
    <div className="">
      <p
        className={
          !condition
            ? "text-white hover:underline text-center text-1xl"
            : "fixed right-0 px-3 py-1 mx-4 rounded-xl bg-candy text-white hover:cursor-pointer"
        }
        onClick={() => router.back()}
      >
        Back
      </p>
    </div>
  );
}
