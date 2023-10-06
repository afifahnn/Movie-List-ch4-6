import { React, useState } from "react";
import { GoSearch } from "react-icons/go";
import { RiMovieLine } from "react-icons/ri";

export const Home1 = ({ dataMovie }) => {
  console.log(dataMovie);
//   const [Search, setSearch] = useState('')
//   const [LoadData, setLoadData] = useState([]);

//   const handleSearch = () => {
//     const filteredData = getDataMovie.filter((item) => {
//         return Search.toLowerCase() === '' ? item : item.poster_path.toLowerCase().includes(Search.toLowerCase())
//     })
//     setLoadData(filteredData)
//   }

  return (
    <div className="relative w-[100%]">
      {/* SEARCH BAR */}
      <div className="absolute top-0 left-0 right-0">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold text-red-600">
            Movielist
          </div>
          <div className="flex justify-between items-center w-[30rem] rounded-3xl border-2 border-red-600">
            <input
              placeholder="What do you want to watch?"
              className="focus:outline-none px-5 py-1 bg-transparent w-full focus:text-slate-300"
            />
            <div className="mr-4">
              <GoSearch color="gray" size={18} />
            </div>
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
        src={`https://image.tmdb.org/t/p/original/${dataMovie.backdrop_path}`}
        alt="Gambar"
      />
      <div className="absolute top-[40%] transform w-[50%] px-4 py-2 space-y-4">
        <div className="text-slate-100 font-bold text-[3rem]">
          {dataMovie.title}
        </div>
        <div className="text-slate-100">
            {dataMovie.overview}
        </div>
        <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white w-[30%] hover:border-red-400 hover:bg-red-400">
            <button className="flex items-center justify-center gap-2">
                <RiMovieLine/>
                WATCH TRAILER
            </button>
        </div>
      </div>
    </div>
  );
};
