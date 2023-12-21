"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/styles/searchInput/style.css";

export default function SearchInput() {
  const [isInput, setIsInput] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`search/${isInput}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Here"
        className="input-search rounded-xl py-1 px-2"
        onChange={(event) => setIsInput(event.target.value)}
        value={isInput}
      />
      <Link href={`search/${isInput}`}>
        <button
          className="bg-candy mx-1 w-16 rounded-xl py-1 px-2 text-white"
          // onClick={handleSearch}
        >
          Search
        </button>
      </Link>
    </>
  );
}
