import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export const MovieDetail = () => {
  let token = sessionStorage.getItem("token");

  let { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=a3afb72cd27c498d0a4ceccdbb854548&language=en-US`;
    axios
      .get(endPoint)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops...",
          text: "There was an error",
          icon: "error",
          confirmButtonColor: "#0D9488",
          footer: "Please, try again later",
        });
      });
  }, [id]);

  
  const [isFaved, setIsFaved] = useState(false);
  
  const handleFavs = (event) => {
    
    const favMovies = localStorage.getItem("favs");
    let tempMoviesInFavs;
  
    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }
    const btnDiv = event.currentTarget.parentElement;
    const parent = btnDiv.parentElement.parentElement;

    const rating = btnDiv.querySelector("span").innerText.substring(7, 11);
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h1").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      overview,
      rating,
      id,
    };

    let movieIsInArray = tempMoviesInFavs.find((movie) => {
      return movie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
    } else {
      let moviesLeft = tempMoviesInFavs.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
    }

    setIsFaved((current) => !current);
  };

  return (
    <>
      {!token && <Navigate to="/" />}
      {!movie && (
        <div className="text-center mt-72">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {movie && (
        <section className="text-gray-700 body-font overflow-hidden bg-white mb-28">
          <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8 ">
            <header>
              <h2 className="text-xl lg:ml-8 md:ml-10 mb-5 font-bold text-gray-900 sm:text-3xl">
                Movie details:
              </h2>
            </header>
          </div>
          <div className="container px-15 py-18 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={movie.original_title}
                className="lg:w-96 md:w-fit w-full object-cover object-center rounded border border-gray-200"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest pb-2">
                  <ul className="inline ml-1">
                    {movie.genres.map((genre) => (
                      <li className="inline mr-3" key={genre.id}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {movie.original_title}
                </h1>
                <div className="flex mt-1 items-center pb-1 border-gray-200 mb-1 justify-start">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Release date: {movie.release_date}
                  </span>
                </div>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">
                      {movie.vote_count} Reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{movie.overview}</p>

                <div className="flex mt-6 items-center pb-3 border-gray-200 mb-5 justify-around">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rating: {movie.vote_average.toString().substring(0, 3)}
                  </span>
                  <button
                    onClick={handleFavs}
                    className={
                      isFaved
                        ? "faved rounded-full w-10 h-10 bg-teal-200 p-0 border-0 inline-flex items-center justify-center text-teal-500 ml-4]"
                        : "rounded-full w-10 h-10 bg-teal-200 p-0 border-0 inline-flex items-center justify-center text-teal-500 ml-4"
                    }
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
