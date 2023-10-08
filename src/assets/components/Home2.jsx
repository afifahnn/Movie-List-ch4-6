import { React } from "react";
import { Link } from "react-router-dom";

export const Home2 = ({ dataMovie }) => {
  return (
    <div>
      <Link to={`/Detail/${dataMovie.id}`}>
        <img
          className="rounded-3xl"
          src={`https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`}
          alt="Gambar"
        />
      </Link>
    </div>
  );
};
