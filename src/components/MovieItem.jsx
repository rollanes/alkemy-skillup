import { Link } from "react-router-dom";

export const MovieItem = ({ title, description, image, rating, id }) => {
  return (
    <Link to={`/detail?movieID=${ id }`} className="block group">
      <img
        src={ `https://image.tmdb.org/t/p/w500/${ image }` }
        alt={ title }
        className="h-[250px] w-full object-contain sm:h-[350px]"
      />

      <div className="flex justify-between mt-3 text-sm">
        <div>
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            { title }
          </h3>

          <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
            { description.substring(0,150) }...
          </p>
        </div>

        <p className="text-gray-900">Rated: { rating }</p>
      </div>
    </Link>
  );
};
