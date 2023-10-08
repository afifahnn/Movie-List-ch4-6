import { React } from "react";
import { RiMovieLine } from "react-icons/ri";

export const Home1 = ({ dataMovie }) => {
  console.log(dataMovie);

  return (
    <div className="relative w-[100%]">
      <img
        className="w-screen h-screen"
        src={`https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}`}
        alt="Gambar"
      />
      <div className="absolute w-full top-0 left-0 h-full bg-opacity-50 bg-black"></div>
      <div className="absolute w-full h-15 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-[30%] transform w-[50%] px-4 py-2 space-y-4">
        <div className="text-slate-100 font-bold text-[3rem]">
          {dataMovie.title}
        </div>
        <div className="text-slate-100">
            {dataMovie.overview}
        </div>
        <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[30%] hover:border-red-400 hover:bg-red-400">
            <button onClick={() => {window.open("https://www.youtube.com")}} className="flex items-center justify-center gap-2">
                <RiMovieLine/>
                WATCH TRAILER
            </button>
        </div>
      </div>
      
      
    </div>
  );
};
