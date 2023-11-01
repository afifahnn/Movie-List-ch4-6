import { React, useState, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Home1 } from "../assets/components/Home1";
import { useDataMoviesPopularQuery } from "../services/get-data-movie";
import { Home2 } from "../assets/components/Home2";
import { GoSearch } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CookiesKey, CookiesStorage } from "../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../redux/actions/authMovie";

export const App = () => {
  // const [LoadData, setLoadData] = useState([]);
  const [SeeAllMovie, setSeeAllMovie] = useState(false);
  const [SearchInput, setSearchInput] = useState("");
  const [ShowMovie, setShowMovie] = useState(true);

  SwiperCore.use([Pagination, Autoplay]);


  const dispatch = useDispatch()

    const getMovie = () => {
        dispatch(GetMovie())
    }

    useEffect(() => {
        getMovie()
    }, [] )

    const {movies} = useSelector((store) => store.movie)

    const LoadData = movies

  // const { data: movie } = useDataMoviesPopularQuery();

  // useEffect(() => {
  //   setLoadData(movie);
  //   // getDataMovie()
  //   //   .then((data) => setLoadData(data.results))
  //   //   .catch((error) => console.error("Error fetching data:", error));
  // }, [movie]);

  const filterMovie = LoadData ? LoadData.filter((item) =>
    item.title.toLowerCase().includes(SearchInput.toLowerCase())
  ) : [];

  const handleSearch = (e) => {
    setShowMovie(!e.target.value);
    setSearchInput(e.target.value);
  };

  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.AuthToken);
    window.location.href = "/";
  };

  return (
    <div>
      {/* SEARCH BAR */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center m-[1rem]">
          <div className="text-[2rem] font-extrabold text-red-600">
            Movielist
          </div>
          <div className="flex justify-between items-center w-[30rem] rounded-3xl border-2 border-red-600">
            <input
              placeholder="What do you want to watch?"
              className="focus:outline-none px-5 py-1 bg-transparent w-full focus:text-slate-300"
              value={SearchInput}
              onChange={handleSearch}
            />
            <div className="mr-4">
              <GoSearch color="gray" size={18} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-red-600 px-5 py-1 border-2 border-red-600 rounded-3xl text-white hover:border-red-400 hover:bg-red-400">
              {/* <Link to={'/'}> */}
                <button onClick={handleLogout} className="w-full h-full">Logout</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* SWIPER HOME 1*/}
      {SearchInput === "" && (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ prevEl: null, nextEl: null }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {LoadData?.map((value) => (
            <SwiperSlide key={value.id}>
              <Home1 dataMovie={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* HOME 2 */}
      <div className="px-[2rem] pt-[5rem] pb-[4rem]">
        {/* <div className="flex items-center mb-[2rem]"> */}
        {SearchInput === "" && (
          <div className="flex justify-between items-center mb-[2rem]">
            <span className="font-bold text-[2rem]">Popular Movie</span>
            <button
              className="flex gap-3 items-center text-red-600 text-lg font-medium hover:text-red-400"
              onClick={() => setSeeAllMovie(!SeeAllMovie)}
            >
              {SeeAllMovie ? "See Less" : "See All Movie"}
              <RiArrowRightLine size={24} />
            </button>
          </div>
        )}

        {SearchInput && (
          <div className="flex items-center mb-[2rem] font-bold text-[1.5rem]">
            Search result "<span>{SearchInput}</span>"
          </div>
        )}
        {/* </div> */}
        <button className="grid grid-cols-4 gap-[3rem]">
          {SeeAllMovie
            ? filterMovie.map((value, index) => (
                <Home2 key={index} dataMovie={value} />
              ))
            : filterMovie
                .slice(0, 4)
                .map((value, index) => <Home2 key={index} dataMovie={value} />)}
        </button>
      </div>
    </div>
  );
};
