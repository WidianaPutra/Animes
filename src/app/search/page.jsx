import AnimeList from "@/components/card";
import { GetResponse } from "@/libs/api";

export default async function SearchPage() {
  const datas = await GetResponse(
    "top/anime",
    `page=${Math.floor(Math.random() * 100)}`
  );
  return (
    <div>
      <AnimeList Api={datas} Search={true} />
    </div>
  );
}
