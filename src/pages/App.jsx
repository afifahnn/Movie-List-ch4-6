import { React, useState, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Home1 } from "../assets/components/Home1";
import { Home2 } from "../assets/components/Home2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { GetMovie } from "../redux/actions/authMovie";
import { Navbar } from "../assets/components/Navbar";

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

  const filterMovie = LoadData ? LoadData.filter((item) =>
    item.title.toLowerCase().includes(SearchInput.toLowerCase())
  ) : [];

  return (
    <div>
      <Navbar SearchInput={SearchInput} setSearchInput={setSearchInput} setShowMovie={setShowMovie}/>

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
          {LoadData?.slice(0, 5).map((value) => (
            <SwiperSlide key={value.id}>
              <Home1 dataMovie={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* HOME 2 */}
      <div className="px-[2rem] pt-[2rem] pb-[4rem]">
        {SearchInput === "" && (
          <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-center mb-[2rem]">
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
          filterMovie.length > 0 ? (
          <div className="flex items-center pt-[6rem] tablet:pt-[3rem] mb-[2rem] font-bold text-[1.5rem]">
            Search result "<span>{SearchInput}</span>"
          </div>
          ) :
          <div className="flex items-center pt-[6rem] tablet:pt-[3rem] mb-[2rem] font-bold text-[1.5rem]">
            "<span>{SearchInput}</span>" tidak ditemukan
          </div>
        )}
        
        <button className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-[1rem] tablet:gap-[3rem]">
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
