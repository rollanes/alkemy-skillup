import { Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { MoviesList } from "./components/MoviesList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MovieDetail } from "./components/MovieDetail";
import { Results } from "./components/Results";
import { Favorites } from "./components/Favorites";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/results/:keyword" element={<Results />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}
