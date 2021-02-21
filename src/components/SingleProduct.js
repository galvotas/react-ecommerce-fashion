import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  CardMedia,
} from "@material-ui/core";
import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";

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
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };
  return (
    <Container
      product={product}
      productimg={productimg}
      productdesc={productdesc}
      producttitle={producttitle}
      productprice={productprice}
      className={classes.root}
    >
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
            {checkIfInCart(cartItems, product.id)
              ? "ALREADY IN CART"
              : "ADD TO CART"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
