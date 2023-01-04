import { Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { MoviesList } from "./components/MoviesList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MovieDetail } from "./components/MovieDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
