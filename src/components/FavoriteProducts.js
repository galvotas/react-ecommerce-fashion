import React, { useState, useEffect } from "react";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import { ResultCard } from "./ResultCard";
import { products } from "../apis/products";
import { useHistory } from "react-router-dom";
import { marginer } from "../actions/marginer";
import { ImHeartBroken } from "react-icons/im";
import { useFavoriteProducts } from "../contexts/FavoritesContext";

export const FavoriteProducts = () => {
  const history = useHistory();
  const { dispatchFavs, favprods } = useFavoriteProducts();

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
    <Container style={marginer("8rem")}>
      <Grid container spacing={3}>
        {favprods && favprods.length ? (
          favprods.map((pr, i) => {
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
                >
                  <IconButton
                    onClick={() =>
                      dispatchFavs({ type: "REMOVE_FROM_FAVORITES", pr })
                    }
                  >
                    <ImHeartBroken />
                  </IconButton>
                </ResultCard>
              </Grid>
            );
          })
        ) : (
          <Grid container item>
            <Typography textAlign="center" variant="h3">
              Your have no favorites in your list...
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
