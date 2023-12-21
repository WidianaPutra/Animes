"use client";
import { useState, useEffect } from "react";
import { GetResponse } from "@/libs/api";
import AnimeList from "@/components/card";
import FooterList from "@/components/card/footer";

export default function AnimPage() {
  const [isPage, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const GetAnime = async () => {
    const response = await GetResponse(`top/anime`, `page=${isPage}`);
    setAnime(response);
  };

  useEffect(() => {
    GetAnime();
  }, [isPage]);

  return (
    <div>
      <AnimeList Api={anime} Title={`Popular`} SeeAll={false} />
      <FooterList Page={isPage} SetPage={setPage} />
    </div>
  );
}
