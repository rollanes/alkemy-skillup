import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const MovieDetail = () => {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {

  }, [movieID]);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
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
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest pb-2">
                  Genres:
                  <ul className="inline ml-5">
                    <li className="inline mr-3">g1</li>
                    <li className="inline mr-3">g2</li>
                    <li className="inline mr-3">g3</li>
                  </ul>
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <div className="flex mt-1 items-center pb-1 border-gray-200 mb-1 justify-start">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Release date:
                  </span>
                </div>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>

                <div className="flex mt-6 items-center pb-3 border-gray-200 mb-5 justify-around">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Rating
                  </span>
                  <button className="rounded-full w-10 h-10 bg-teal-200 p-0 border-0 inline-flex items-center justify-center text-teal-500 ml-4">
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
