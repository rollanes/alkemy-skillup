import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      Swal.fire({
        title: 'Oops...',
        text: 'Fields cannot be empty!',
        icon: 'error'
      });
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Oops...',
        text: 'You should enter a valid email!',
        icon: 'error'
      });
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        title: 'Error',
        text: "Invalid credentials",
        icon: 'error'
      });
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        Swal.fire({
          title: 'Nice!',
          text: "You're in",
          icon: 'success'
        });

        const receivedToken = res.data.token;
        localStorage.setItem('token', receivedToken);
        navigate('/movies');
      });
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
              autoComplete="email"
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
              autoComplete="password"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="ml-3 inline-block rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
