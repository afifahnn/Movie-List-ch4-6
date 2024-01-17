import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataMoviesDetailQuery } from "../../services/get-data-detail";
import { RiMovieLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { GetMovieDetail } from "../../redux/actions/authDetail";

export const Detail = () => {
  const { id } = useParams(); 
  const { data } = useDataMoviesDetailQuery(id);
  console.log(data);
  const movie = data ? data : [];

  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.AuthToken);
    window.location.href = "/";
  };

  return (
    <div className="relative w-[100%]">
      {/* SEARCH BAR */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold text-red-600">
            Movielist
          </div>
          <div className="flex gap-4">
            <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white hover:border-red-400 hover:bg-red-400">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>

    <div>
      <img
        className="w-screen h-screen block object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="Gambar"
      />
      <div className="absolute inset-0 grid h-full w-full justify-items-start place-items-center px-10 bg-black/75">
        <div className="w-[80%] desktop:w-[70%]">
          <div className="text-slate-100 font-bold text-[3rem]">
            {movie?.title}
          </div>
          <div className="text-slate-100 py-4">
            {movie.genres?.map((genre) => genre.name).join(", ")}
          </div>
          <div className="text-slate-100">{movie.overview}</div>
          <div className="flex items-center justify-start gap-2 text-slate-100 py-4">
            <RiStarLine color="yellow" size={20} />
            {movie.vote_average}
          </div>
          <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[80%] tablet:w-[40%] desktop:w-[22%] hover:border-red-400 hover:bg-red-400">
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
          <Link to="/Home">
            <div className="mt-[1rem] bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[80%] tablet:w-[40%] desktop:w-[22%] hover:border-red-400 hover:bg-red-400">
              <button className="flex items-center justify-center gap-2">
                <RiArrowLeftLine size={20} />
                BACK TO HOME
              </button>
            </div>
          </Link>
        </div>
    </div>

    </div>
    </div>
  );
};
