import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MovieItem } from "./MovieItem";

export const Favorites = () => {
  let token = sessionStorage.getItem("token");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8 mb-20">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Favorite movies:
          </h2>
        </header>

        {favorites.length === 0 && (
          <h4 className="text-xl font-bold text-gray-900 sm:text-xl">
            You haven't favourited any movies yet!
          </h4>
        )}

        <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((movie, index) => {
            return (
              <MovieItem
                title={movie.title}
                description={movie.overview}
                image={movie.imgURL}
                rating={movie.rating}
                key={index}
                id={movie.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
