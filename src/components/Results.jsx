import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { MovieItem } from "./MovieItem";

export const Results = () => {
  let { keyword } = useParams();
 
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=a3afb72cd27c498d0a4ceccdbb854548&language=en-US&query=${keyword}`;

    axios
      .get(endPoint)
      .then((res) => {
        const moviesArray = res.data.results;

        if (moviesArray.length === 0) {
          Swal.fire({
            title: "Oops...",
            text: "Your search didn't throw any results",
            icon: "error",
            confirmButtonColor: "#0D9488",
            footer: "Please, try again",
          });
        }
        setMoviesResults(moviesArray);
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
  }, [keyword]);

  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8 mb-20">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Search results for <em> {keyword} :</em>
        </h2>
      </header>
      {moviesResults.length === 0 && (
        <h4 className="text-xl font-bold text-gray-900 sm:text-xl">
          There's no results for your search
        </h4>
      )}
      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {moviesResults.map((movie, index) => {
          return (
            <MovieItem
              title={movie.original_title}
              description={movie.overview}
              image={movie.poster_path}
              rating={movie.vote_average}
              key={index}
              id={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};
