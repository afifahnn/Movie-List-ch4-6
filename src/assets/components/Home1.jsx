import { React } from "react";
import { RiMovieLine } from "react-icons/ri";

export const Home1 = ({ dataMovie }) => {
  console.log(dataMovie);

  return (
    <div className="relative w-[100%]">
      <img
        className="w-screen h-screen object-cover"
        src={`https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}`}
        alt="Gambar"
      />
      <div className="absolute inset-0 grid h-full w-full justify-items-start place-items-center px-10 bg-black/75">
        <div className="w-[80%] desktop:w-[70%]">
          <div className="text-slate-100 font-bold text-[3rem]">
            {dataMovie.title}
          </div>
          <div className="text-slate-100 py-4">
              {dataMovie.overview}
          </div>
          <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white hover:border-red-400 hover:bg-red-400 w-[80%] tablet:w-[40%] desktop:w-[22%]">
              <button onClick={() => {window.open("https://www.youtube.com")}} className="flex items-center justify-center gap-2">
                  <RiMovieLine/>
                  WATCH TRAILER
              </button>
          </div>
        </div>

      </div>
      
      
    </div>
  );
};
