import Image from "next/image";
import React from "react";
import Loader from "../Loader/Loader";
import MovieDetail from "../MovieDetail/MovieDetail";

const MovieCard = ({ movie }) => {
  return (
    <div className='w-[180px] h-[220px] rounded-sm overflow-hidden transition-all ease-in-out duration-[0.3s] hover:scale-110  cursor-pointer'>
      <Image
        height={220}
        width={180}
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
