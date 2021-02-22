import React from "react";
import { Grid, Container } from "@material-ui/core";
import { ResultsShoppingOptions } from "./ResultsShoppingOptions";
import { ResultsTopSection } from "./ResultsTopSection";
import { ResultCard } from "./ResultCard";
import { useProducts } from "../contexts/ResultsContext";
import { useHistory } from "react-router-dom";

export const ResultsWrapper = () => {
  const history = useHistory();
  const {
    state: { products },
  } = useProducts();

  const showSingleProduct = (pr, e) => {
    if (
      e.target.classList.contains("MuiCardMedia-root") ||
      (e.target.classList.contains("MuiTypography-root") &&
        !e.target.classList.contains("MuiCardActions-root"))
    ) {
      history.push({
        pathname: `/products/product/${pr.title}`,
        state: {
          pr,
        },
      });
    }
  };

  return (
    <Container style={{ marginTop: "4rem" }}>
      <Grid container justify="space-between" spacing={3}>
        <ResultsShoppingOptions />
        <ResultsTopSection />
        <Grid container spacing={3} style={{ marginTop: "1rem" }}>
          {products.length !== 0
            ? products.map((pr, i) => {
                const { title, image, id, price } = pr;
                return (
                  <Grid item xs={12} md={6} lg={4} key={id}>
                    <ResultCard
                      onClick={(e) => showSingleProduct(pr, e)}
                      key={id}
                      productid={id}
                      productimg={image}
                      producttitle={title}
                      productprice={price.toFixed(2)}
                      product={pr}
                    />
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Grid>
    </Container>
  );
};
