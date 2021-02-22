import React from "react";
import { makeStyles, Button, Container, Typography } from "@material-ui/core";
import { CartHeading } from "./CartHeading";
import { CartProduct } from "./CartProduct";
import { useCart } from "../contexts/CartContext";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 400,
    overflowY: "scroll",
  },
  buttonStyles: {
    width: "100%",
    borderRadius: "0",
    margin: "0.8rem 0",
    boxShadow: "none",
  },
  emptyCartContainer: {
    minWidth: 350,
    maxWidth: 400,
    margin: "auto",
  },
});

export const Cart = () => {
  const classes = useStyles();
  const { cartItems, subTotal } = useCart();
  const b = cartItems.length === 0 ? false : true;

  switch (b) {
    case true:
      return (
        <Container className={classes.root}>
          <CartHeading totalprice={subTotal} itemsquantity={cartItems.length} />
          {cartItems.map((product, i) => {
            const { id, image, price, title, quantity } = product;
            return (
              <CartProduct
                key={id}
                productid={id}
                quantity={quantity}
                productprice={`$${price}`}
                producttitle={title}
                backgroundimg={image}
              />
            );
          })}
          {cartItems && cartItems.length ? (
            <Button
              size="large"
              color="primary"
              variant="contained"
              className={classes.buttonStyles}
            >
              View And Edit Cart
            </Button>
          ) : (
            ""
          )}
        </Container>
      );
    case false:
      return (
        <Container className={classes.emptyCartContainer}>
          <Typography variant="subtitle2" align="center">
            You have no Items in Cart
          </Typography>
        </Container>
      );
  }
};
