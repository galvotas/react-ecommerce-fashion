import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";
import { CgArrowLongLeft } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { marginer } from "../actions/marginer";
import { useFavoriteProducts } from "../contexts/FavoritesContext";

const useStyles = makeStyles({
  root: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  inStock: {
    marginBottom: "4rem",
  },
  productDescription: {
    marginBottom: "2rem",
  },
  productImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    minHeight: "30vh",
  },
  price: {
    marginBottom: "1rem",
  },
  arrowBtn: {
    maxWidth: "fit-content",
    marginTop: "0.3rem",
  },
});

export const SingleProduct = ({
  product,
  productimg,
  productdesc,
  producttitle,
  productprice,
}) => {
  const classes = useStyles();
  const { dispatch, cartItems } = useCart();
  const { dispatchFavs } = useFavoriteProducts();

  const history = useHistory();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const addToFavs = (product) => {
    dispatchFavs({
      type: "ADD_TO_FAVORITES",
      product,
    });
  };
  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia className={classes.productImage} image={productimg} />
        </Grid>
        <Grid container item xs={12} md={6} direction="column">
          <Grid item>
            <Typography variant="h4">{producttitle}</Typography>

            <Typography
              variant="caption"
              display="block"
              color="secondary"
              className={classes.inStock}
            >
              In Stock
            </Typography>
          </Grid>
          <Typography variant="body2" className={classes.productDescription}>
            {productdesc}
          </Typography>

          <Typography variant="subtitle2" className={classes.price}>
            ${productprice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(product)}
            disabled={checkIfInCart(cartItems, product.id) ? true : false}
          >
            {checkIfInCart(cartItems, product.id) ? "IN CART" : "ADD TO CART"}
          </Button>

          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            style={marginer("1rem")}
          >
            <IconButton
              className={classes.arrowBtn}
              color="primary"
              onClick={() => history.goBack()}
            >
              <CgArrowLongLeft />
            </IconButton>
            <IconButton onClick={() => addToFavs(product)}>
              <AiFillHeart />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
