import React from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { Footer } from "../components/Footer";
import { FavoriteProducts } from "../components/FavoriteProducts";

export const Favoritespage = () => {
  return (
    <>
      <Navigation />
      <ResultsHeader maintext="FAVOURITES" />
      <FavoriteProducts />
      <Footer />
    </>
  );
};
