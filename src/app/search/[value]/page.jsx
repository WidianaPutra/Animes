import AnimeList from "@/components/card";
import { GetResponse } from "@/libs/api";

export default async function ({ params: { value } }) {
  const datas = await GetResponse("anime", `q=${value}`);
  return (
    <div>
      <AnimeList Api={datas} Search={true} />
    </div>
  );
}
