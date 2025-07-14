import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeaturedGames from "./components/FeaturedGames";
import GamesCategories from "./components/GamesCategories";
import GameAccessories from "./components/GameAccessories";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <FeaturedGames/>
      <GamesCategories/>
      <GameAccessories/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
