import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export const MoviesList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8 mb-20">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Movies Collection
        </h2>
      </header>
      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">

        <a href="#" className="block group">
          <img
            src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="h-[250px] w-full object-cover sm:h-[350px]"
          />

          <div className="flex justify-between mt-3 text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                Movie title
              </h3>

              <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, accusamus dicta, neque sequi architecto nemo, quasi numquam voluptatem ipsam veritatis expedita ut tempora distinctio hic ratione possimus. Odio, ipsa molestiae.
              </p>
            </div>

            <p className="text-gray-900">Rating</p>
          </div>
        </a>
        
      </div>
    </div>
  );
};
