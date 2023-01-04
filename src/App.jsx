import { Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { MoviesList } from "./components/MoviesList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes>
    </>
  );
}
