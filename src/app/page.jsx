import AnimeList from "@/components/card";
import { GetResponse } from "@/libs/api.js";
import Link from "next/link";
import "./globals.css";

export default async function () {
  const animeList = await GetResponse("top/anime", "limit=10");
  return (
    <div>
      <AnimeList Api={animeList} Title={`Pupular`} SeeAll={true} />
      <div className="flex w-full justify-center">
        <Link
          href={`/anime`}
          className="text-center text-white text-xl hover:underline p-3"
        >
          All Anime
        </Link>
      </div>
    </div>
  );
}
