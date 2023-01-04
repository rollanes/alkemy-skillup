import axios from "axios";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
    }

    if (email !== "" && regexEmail.test(email)) {
    }

    if(email === 'challenge@alkemy.org' || password !== 'react'){

    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {

      })
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Login to see our content!
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
              name="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
              name="password"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
