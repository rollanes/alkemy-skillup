import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { Search } from "./Search";

export const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const ref = useRef();

  let token = sessionStorage.getItem('token')

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-6">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="body_1"
                width="32"
                height="32"
              >
                <g transform="matrix(0.06491543 0 0 0.06491543 0 0)">
                  <g></g>
                  <g>
                    <g>
                      <path
                        d="M415.051 82.183C 414.253 59.779 399.551 39.935997 377.485 31.07C 366.752 12.043 345.507 0 321.975 0C 303.39502 0 285.90802 7.683 274.122 20.566C 266.924 17.977 259.233 16.633 251.421 16.633C 236.72101 16.633 222.699 21.362 211.57101 29.862999C 201.682 24.132 190.21802 21.053999 178.35701 21.053999C 147.89401 21.053999 122.44301 41.259 116.877014 67.927C 115.20402 67.802 113.52301 67.739 111.83801 67.739C 77.31502 67.739 49.228012 93.69 49.228012 125.587C 49.228012 148.096 63.22301 167.629 83.58601 177.187L83.58601 177.187L117.072014 461.79297C 118.029015 470.31396 124.513016 477.43796 133.43701 479.76596C 135.43501 480.28696 181.654 492.16095 245.65402 492.91196C 245.92302 492.92197 246.18602 492.94894 246.45702 492.94894C 246.64102 492.94894 246.81702 492.92795 246.99902 492.92395C 248.65002 492.93994 250.31102 492.94894 251.98502 492.94894C 291.651 492.94894 329.50903 488.53494 364.506 479.83594C 373.69702 477.54895 380.36002 470.19495 381.18002 461.43393L381.18002 461.43393L409.16403 182.48294C 429.63605 172.95995 443.72205 153.37195 443.72205 130.78894C 443.722 111.1 432.691 92.744 415.051 82.183zM133.458 202.181C 154.53 203.844 186.11699 205.392 223.815 206.084L223.815 206.084L223.815 230.386C 181.938 243.517 151.656 267.428 143.48901 291.562L143.48901 291.562L133.458 202.181zM223.816 450.301C 196.44899 448.74 174.111 445.24 160.44699 442.649L160.44699 442.649L147.092 323.643C 157.799 340.159 182.293 349.768 214.983 349.768C 217.888 349.768 220.837 349.684 223.817 349.526L223.817 349.526L223.816 450.301zM337.463 442.885C 315.76602 447.299 292.876 449.94702 269.09802 450.80502L269.09802 450.80502L269.09802 341.604C 295.31302 333.895 318.36703 321.587 334.169 306.803C 343.104 298.446 349.288 289.72702 352.56702 281.06302L352.56702 281.06302L337.463 442.885zM354.575 259.57C 354.30002 258.241 353.953 256.922 353.519 255.61601C 346.349 234.02101 319.457 221.12802 281.58203 221.12802C 277.49603 221.12802 273.32202 221.28902 269.09705 221.60103L269.09705 221.60103L269.09705 206.22203C 300.76804 205.83504 331.17505 204.82503 359.91504 202.34804L359.91504 202.34804L354.575 259.57zM401.285 151.859C 392.03 154.845 351.275 165.609 244.669 165.609C 181.14601 165.609 141.951 161.874 118.838005 158.237C 118.838005 158.237 117.594 157.966 116.978004 157.938C 112.883 157.27 109.324005 156.60901 106.253006 155.979C 92.340004 151.393 82.392006 139.432 82.392006 125.43301C 82.392006 107.48601 98.742004 92.886 118.838005 92.886C 122.781006 92.886 126.677 93.454 130.421 94.575005L130.421 94.575005L146.35701 99.34601L145.503 84.35601C 145.47 83.79301 145.45401 83.22601 145.45401 82.65601C 145.45401 64.710014 161.80402 50.109013 181.90001 50.109013C 191.08002 50.109013 199.85501 53.17301 206.60501 58.73601L206.60501 58.73601L215.45502 66.029015L223.16801 57.774014C 230.126 50.329014 240.32901 46.059013 251.16501 46.059013C 257.966 46.059013 264.60202 47.746014 270.357 50.938015L270.357 50.938015L280.469 56.547016L286.356 47.307014C 292.835 37.136017 304.981 30.818014 318.05 30.818014C 332.8 30.818014 346.00598 38.674015 351.69498 50.832016L351.69498 50.832016L353.69296 55.103016L358.60596 56.581017C 373.44196 61.046017 383.41095 73.43902 383.41095 87.42302C 383.41095 88.44202 383.35294 89.49702 383.23895 90.56002L383.23895 90.56002L382.46796 97.70402L389.72595 100.78302C 402.38196 106.15302 410.55896 117.70002 410.55896 130.19902C 410.556 138.512 407.046 146.101 401.285 151.859z"
                        stroke="#0D9488"
                        strokeWidth="1"
                        fill="#0D9488"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>

            <Search /> 
          
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/movies"
                  >
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/favorites"
                  >
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/"
                >
                  { token ? ("Log out") : ("Log in") }
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="text-gray-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Movies
            </Link>

            <Link
              to="/favorites"
              className="text-gray-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Favorites
            </Link>

            <Link
              to="/contact"
              className="text-gray-500 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </Transition>
    </header>
  );
};
