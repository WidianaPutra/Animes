import Link from "next/link";
import "@/styles/animeDetail/style.css";

export default function AnimeInformation({ response }) {
  return (
    <>
      <div className="infor px-6 flex flex-col justify-between">
        <h3 className="text-white">Renk: {response.data?.rank}</h3>
        <h3 className="text-white">Title: {response.data.title}</h3>
        <h3 className="text-white">Episode: {response.data?.episodes}</h3>
        <h3 className="text-white">Popularity: {response.data?.popularity}</h3>
        <h3 className="text-white">Score: {response.data?.score}</h3>
        <h3 className="text-white">Duration: {response.data?.duration}</h3>
        <Link href={`${response.data?.url}`}>
          <button className="bg-candy text-white px-4 py-1 my-1">
            Watch Now
          </button>
        </Link>
      </div>
    </>
  );
}
