import React from "react";

export const Home2 = ({dataMovie}) => {
  return (
    <div>
      <img
        className='rounded-3xl'
        src={`https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`}
        alt="Gambar"
      />
    </div>
  );
};
