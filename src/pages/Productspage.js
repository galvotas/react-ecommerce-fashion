import React from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { ResultsWrapper } from "../components/ResultsWrapper";

export const Productspage = () => {
  return (
    <>
      <Navigation />
      <ResultsHeader maintext="STAY MODERN" />
      <ResultsWrapper />
    </>
  );
};
