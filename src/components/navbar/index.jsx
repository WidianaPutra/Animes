"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import j from "jquery";
import Menu from "@/assets/icons/menu.svg";
import X from "@/assets/icons/x.svg";
import "@/styles/navbar/style.css";

export default function Navbar() {
  const [isCounter, setIsCounter] = useState(0);
  const handleButton = () => setIsCounter((e) => (e + 1) % 2);
  const width = document.documentElement.clientWidth;
  const handleShow = () => {
    const list = j(".list-menu");
    isCounter === 1
      ? list.css({ transform: "translate(0%)" })
      : list.css({ transform: "translate(100%)" });
    width >= 767 && list.css({ transform: "translate(0&)" });
  };

  handleShow();

  return (
    <div className="flex w-full h-14 justify-between items-center fixed bg-candy z-50">
      <div className="logo w-full flex justify-between md:w-0">
        <h1 className="text-white md:text-3xl text-xl">Anime</h1>
        <Image
          height={30}
          width={30}
          alt=".."
          src={isCounter === 1 ? X : Menu}
          className="md:hidden sm:block"
          onClick={handleButton}
        />
      </div>
      <ul
        className={`list-menu bg-candy flex gap-2 md:static flex-col md:flex-row right-0  md:inset-y-0 inset-y-14 h-3/6 justify-evenly items-center fixed`}
      >
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/anime`}>Anime</Link>
        </li>
        <li>
          <Link href={`/search`}>Search</Link>
        </li>
        <li>
          <Link href={`/account`}>Account</Link>
        </li>
      </ul>
    </div>
  );
}
