import { Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { MoviesList } from "./components/MoviesList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes>
      <Footer />
    </>
  );
}
