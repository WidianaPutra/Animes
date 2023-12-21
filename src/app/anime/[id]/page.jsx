import AnimeInformation from "@/components/animeInformation";
import AnimeList from "@/components/card/index";
import Synopsis from "@/components/animeInformation/synopsis";
import { GetResponse } from "@/libs/api";
import Back from "@/components/back";
export default async function AnimeDetail({ params: { id } }) {
  const response = await GetResponse(`anime/${id}`);
  const TopList = await GetResponse(
    "top/anime",
    `page=${Math.floor(Math.random() * 1000)}`
  );
  return (
    <div className="py-16">
      <Back condition={true} />
      <div className="anime-info flex px-3 justify-center">
        <div className="flex">
          <div className="image-detail">
            <img
              src={response.data?.images.webp.image_url}
              alt=""
              className=""
            />
          </div>
          <AnimeInformation response={response} />
        </div>
      </div>
      <div className="p-3">
        <Synopsis response={response} />
      </div>
      <AnimeList Api={TopList} />
      <Back />
    </div>
  );
}
