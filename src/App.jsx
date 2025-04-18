import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/MovieDetail";
import SearchResult from "./pages/SearchResult";
import Popular from "./pages/Popular";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/popular" element={<Popular />} />
    <Route path="/top-rated" element={<TopRated />} />
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="/search" element={<SearchResult />} />
  </Routes>
</div>

    </Router>
  );
}

export default App;