import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { MovieItem } from "./MovieItem";

export const MoviesList = () => {

  const [ moviesList, setMoviesList ] = useState([]);

  let token = localStorage.getItem('token');
  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=a3afb72cd27c498d0a4ceccdbb854548&page=1';
    axios
      .get(endPoint)
      .then(res => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
  }, [setMoviesList]);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8 mb-20">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Movies Collection
          </h2>
        </header>

        <MovieItem />

      </div>
      )}

    </>
  );
};
