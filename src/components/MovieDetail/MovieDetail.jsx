import Image from "next/image";
import React from "react";
import { AverageVote, Cross, Language, ThumbsUp } from "../../constants/icons";

const MovieDetail = ({ movie, showModal, setShowModal }) => {
  return (
    <div
      className={` ${
        showModal ? "block" : "hidden"
      }  fixed inset-0 z-30 flex justify-center items-center bg-backdrop`}>
      <div
        className={`lg:w-3/5 w-11/12 mx-auto rounded-xl bg-white h-4/5 p-7 relative`}
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff, rgb(255, 255, 255, 0.7), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}>
        <button
          className='absolute lg:right-5 lg:top-5 md:right-5 md:top-5 right-3 top-3'
          onClick={() => setShowModal(false)}>
          <Cross className='text-2xl text-white' />
        </button>
        <div className='flex justify-start items-start gap-5'>
          <div className='h-[150px] w-[100px] overflow-hidden rounded-lg'>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width={100}
              height={150}
            />
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>{movie.title}</h2>
            <p className='text-gray-700'>{movie.original_title}</p>
            <div className='flex justify-start items-start gap-3 mt-3'>
              <span className='flex justify-start items-start gap-1'>
                <ThumbsUp className='text-2xl' />
                <p>{movie.vote_count}</p>
              </span>
              <span className='flex justify-start items-start gap-1'>
                <AverageVote className='text-2xl' />
                <p>{movie.vote_average}</p>
              </span>
              <span className='flex justify-start items-start gap-1'>
                <Language className='text-2xl' />
                <p>{movie.original_language}</p>
              </span>
            </div>
          </div>
        </div>

        <div className='lg:w-3/5 text-justify font-semibold mt-5'>
          <p className='lg:text-gray-600'>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
