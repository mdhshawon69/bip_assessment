import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Filter, Loader, MovieCard } from "../components";
import MovieDetail from "../components/MovieDetail/MovieDetail";

const Home = () => {
  //State for storing the movies data for rendering as the movie item.
  const [movies, setMovies] = useState({
    movies: [],
    error: "",
  });

  //State for filter inputs
  const [filterKey, setFilterKey] = useState("All");

  //State for setting the selected movie and togolling the modal
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showModal, setShowModal] = useState(false);

  //State for storing filtered movies
  const [filteredMovies, setFilteredMovies] = useState([]);

  //Function for fetching the movie data from the API.
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movie-task.vercel.app/api/popular?page=1"
      );
      setMovies({
        movies: data.data.results,
        error: "",
      });
      setFilteredMovies(data.data.results);
    } catch (err) {
      setMovies({
        movies: [],
        error: err.message,
      });
    }
  };

  //useEffect hook for fetching the data after changing the movies state.
  useEffect(() => {
    getMovies();
  }, []);

  //Function for filtering the movies
  const filterMovies = () => {
    if (filterKey === "All") {
      setFilteredMovies(movies.movies);
    } else {
      const foundMovies = movies.movies.filter((item) =>
        item.release_date.includes(filterKey)
      );

      setFilteredMovies(foundMovies);
    }
  };

  //Function for selecting movie for showing details
  const selectMovie = (id) => {
    const foundMovie = movies.movies.find((item) => item.id === id);
    setSelectedMovie(foundMovie);
    setShowModal(true);
  };

  return (
    <div className='h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!movies.movies.length ? (
        <Loader />
      ) : (
        <main className='w-4/5 mx-auto text-center'>
          <div className='flex lg:justify-start lg:items-start justify-center items-center gap-2 mt-10 mb-5'>
            <Filter setFilterKey={setFilterKey} />
            <button
              className='py-2 px-4 text-white rounded bg-violet-400'
              onClick={filterMovies}>
              Filter
            </button>
          </div>
          <div className='flex justify-center items-center lg:justify-start lg:items-start gap-5 flex-wrap'>
            {filteredMovies.length ? (
              filteredMovies?.map((item) => (
                <div onClick={() => selectMovie(item.id)}>
                  <MovieCard key={item.id} movie={item} />
                </div>
              ))
            ) : (
              <h1 className='text-4xl mx-auto mt-20'>No movies found</h1>
            )}
          </div>
        </main>
      )}

      <MovieDetail
        movie={selectedMovie}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Home;
