import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Favourites from "./pages/FavoritsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/favorites" element={<Favourites/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;