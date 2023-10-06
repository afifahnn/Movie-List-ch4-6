import { React, useState, useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Home1 } from "../assets/components/Home1";
import { fetchDataMovie, useMovieDataQuery } from "../services/get-data-movie";
import { getDataMovie } from "../services/get-data-movie";
import { Home2 } from "../assets/components/Home2";
// import { useNavigate } from "react-router-dom";
// import { CarouselCustomNavigation } from "../assets/components/CarouselCustomNavigation";
import { Carousel } from "flowbite-react";
// import { Carousel } from "@material-tailwind/react";

export const App = () => {
  const [LoadData, setLoadData] = useState([]);
  const [PageNow, setPageNow] = useState(1);
  //   const navigate = useNavigate();
  const [SeeAllMovie, setSeeAllMovie] = useState(false);

  const { data: movie } = useMovieDataQuery(PageNow);
  console.log(movie, "data");

  useEffect(() => {
    getDataMovie()
      .then((data) => setLoadData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* HOME 1 */}
      <div>
        {/* <Carousel slideInterval={5000}>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel> */}

        {LoadData.slice(0, 1).map((value, index) => {
          return (
            <Home1
              key={index}
              setData={setLoadData}
              dataMovie={value}
              DataAll={LoadData}
            />
          );
        })}
      </div>

      {/* HOME 2 */}
      <div className="p-[2rem]">
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
        <div className="grid grid-cols-4 gap-[3rem]">
          {SeeAllMovie
            ? LoadData.map((value, index) => (
                <Home2
                  key={index}
                  setData={setLoadData}
                  dataMovie={value}
                  DataAll={LoadData}
                />
              ))
            : LoadData.slice(0, 4).map((value, index) => (
                <Home2
                  key={index}
                  setData={setLoadData}
                  dataMovie={value}
                  DataAll={LoadData}
                />
            ))}
        </div>
      </div>
    </div>
  );
};
