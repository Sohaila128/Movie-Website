import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Movie from "./Pages/MovieDetail/MovieDetail";
import MovieList from "./components/MovieList";
import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="App">
        <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            index
            element={
              <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          ></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route
            path="movies/:type"
            element={<MovieList searchQuery={searchQuery} />}
          ></Route>
          <Route
            path="/search"
            element={
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route path="*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;






