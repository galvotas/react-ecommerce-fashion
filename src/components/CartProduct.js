import React from "react";
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../contexts/CartContext";

export const useStyles = makeStyles({
  root: {
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    cursor: "pointer",
  },
  productImage: {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
});

export const CartProduct = ({
  backgroundimg,
  quantity,
  producttitle,
  productprice,
  productid,
}) => {
  const classes = useStyles();

  const { dispatch } = useCart();
  return (
    <Grid className={classes.root} container justify="space-between">
      <Grid
        item
        xs={3}
        className={classes.productImage}
        style={{ backgroundImage: `url(${backgroundimg})` }}
      />
      <Grid container direction="column" item xs={8}>
        <Typography variant="body1">{producttitle}</Typography>
        <Typography variant="subtitle2">{productprice}</Typography>
        <Grid container item justify="space-between" alignItems="center">
          <Grid container item xs>
            <Typography variant="body2">
              Qty:
              <IconButton
                onClick={() => dispatch({ type: "INCREMENT", productid })}
              >
                <IoIosAdd />
              </IconButton>
              {quantity}
              <IconButton
                onClick={() => dispatch({ type: "DECREMENT", productid })}
              >
                <IoIosRemove />
              </IconButton>
            </Typography>
          </Grid>
          <Grid container item xs={2} justify="flex-end">
            <IconButton
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", productid })}
            >
              <AiFillDelete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
