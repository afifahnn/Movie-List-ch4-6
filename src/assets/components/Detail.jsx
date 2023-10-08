import { React } from "react";
import { useParams } from "react-router-dom";
import { useMovieDataQueryDetail } from "../../services/get-data-detail";
import { RiMovieLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

export const Detail = (props) => {
  const { id } = useParams();
  const { data } = useMovieDataQueryDetail(id);
  console.log(data);
  const movie = data ? data : [];

  return (
    <div className="relative w-[100%]">
      {/* SEARCH BAR */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold text-red-600">
            Movielist
          </div>
          <div className="flex gap-4">
            <div className="px-5 py-1 border-2 border-red-600 rounded-3xl text-red-600 hover:border-red-400 hover:text-red-400">
              <button>Login</button>
            </div>
            <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white hover:border-red-400 hover:bg-red-400">
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-screen h-screen block"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="Gambar"
      />
      <div className="absolute w-full top-0 left-0 h-full bg-opacity-50 bg-black"></div>
      <div className="absolute w-full h-15 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-[30%] transform w-[50%] px-4 py-2 space-y-4">
        <div className="text-slate-100 font-bold text-[3rem]">
          {movie.title}
        </div>
        <div className="text-slate-100">
          {movie.genres?.map((genre) => genre.name).join(", ")}
        </div>
        <div className="text-slate-100">{movie.overview}</div>
        <div className="flex items-center justify-start gap-2 text-slate-100">
          <RiStarLine color="yellow" size={20} />
          {movie.vote_average}
        </div>
        <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[30%] hover:border-red-400 hover:bg-red-400">
          <button
            onClick={() => {
              window.open("https://www.youtube.com");
            }}
            className="flex items-center justify-center gap-2"
          >
            <RiMovieLine size={20} />
            WATCH TRAILER
          </button>
        </div>
        <Link to="/">
          <div className="mt-[1rem] bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[30%] hover:border-red-400 hover:bg-red-400">
            <button className="flex items-center justify-center gap-2">
              <RiArrowLeftLine size={20} />
              BACK TO HOME
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
