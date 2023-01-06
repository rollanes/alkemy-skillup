import Swal from "sweetalert2";

export const Search = () => {

  let token = sessionStorage.getItem('token');

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    
    if( keyword.length === 0 ) {
      Swal.fire({
        title: "Error",
        text: "Search cannot be empty",
        icon: "error",
        confirmButtonColor: "#0D9488",
        footer: "Please, write a keyword"
      });
    } else if ( keyword.length < 4 ) {
      Swal.fire({
        title: "Error",
        text: "Keyword must be longer than 4 characters",
        icon: "error",
        confirmButtonColor: "#0D9488",
      });
    }

    if( !token ) {
      Swal.fire({
        title: "Error",
        text: "Please log in first",
        icon: "error",
        confirmButtonColor: "#0D9488",
      });
    }
  }
  return (
    <form onSubmit={ handleSubmit } className="relative mr-8">
      <div className="absolute left-4 top-3 text-gray-400">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        className="w-full rounded-full hover:shadow-lg focus:shadow-lg focus:outline-0 p-2.5 border pl-10"
        type="text"
        name="keyword"
        placeholder="Search"
      />
    </form>
  );
};
