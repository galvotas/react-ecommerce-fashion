import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useCart } from "../contexts/CartContext";
import { checkIfInCart } from "../actions/checkIfInCart";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  cardMedia: {
    height: "350px",
    backgroundColor: "#F5F5F5",
    backgroundSize: "contain !important",
  },
});

export const ResultCard = ({
  productimg,
  producttitle,
  productprice,
  productid,
  onClick,
  product,
}) => {
  const classes = useStyles();
  const { dispatch, cartItems } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <Card
      product={product}
      onClick={onClick}
      productimg={productimg}
      producttitle={producttitle}
      productprice={productprice}
      productid={productid}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Contemplative Reptile"
          image={productimg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body2">
            {producttitle}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            ${productprice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => addToCart(product)}
          disabled={checkIfInCart(cartItems, productid) ? true : false}
        >
          {checkIfInCart(cartItems, productid) ? "IN CART" : "ADD TO CART"}
        </Button>
      </CardActions>
    </Card>
  );
};
