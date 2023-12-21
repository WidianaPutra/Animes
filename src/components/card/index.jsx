import Image from "next/image";
import "@/styles/animeList/style.css";
import Link from "next/link";
import SearchInput from "../searchInput";

export default function AnimeList({ Api, Title, SeeAll, Search }) {
  return (
    <>
      <div style={{ height: "70px" }} />
      <div className="header-list-anime flex w-full justify-between items-center h-10">
        {Title || SeeAll ? (
          <>
            <h1 className="text-white md:text-2xl text-lg">Anime {Title}</h1>
            <Link
              href={SeeAll ? "/anime" : "/"}
              className="text-white  hover:underline"
            >
              {SeeAll ? "All Anime" : "Back"}
            </Link>
          </>
        ) : null}
        {Search && (
          <div>
            <SearchInput />
          </div>
        )}
      </div>
      <div className="wrapper-anime-list grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full">
        {Api.data?.map((result, index) => (
          <Link href={`/anime/${result.mal_id}`} key={index}>
            <div className="card mx-4 my-2">
              <div className="image rounded-2xl h-max overflow-hidden">
                <Image
                  src={result.images.webp.image_url}
                  alt=".."
                  height={350}
                  width={230}
                  className="rounded-3xl w-full hover:scale-105 transition-all"
                />
              </div>
              <p className="text-white md:text-base sm:text-xs text-xs">
                {result.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
