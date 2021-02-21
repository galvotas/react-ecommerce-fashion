import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Button,
} from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    paddingTop: "0.8rem",
    paddingBottom: "0.8rem",
    borderBottom: "1px solid #151515",
  },
  buttonStyles: {
    width: "100%",
    borderRadius: "0",
    margin: "0.8rem 0",
    boxShadow: "none",
  },
});

export const CartHeading = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container item sm justify="space-between">
      <Grid item>
        <Typography variant="subtitle2">0 Item in Cart</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">Cart Subtotal:</Typography>
        <Typography variant="h6">$90.00</Typography>
      </Grid>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.buttonStyles}
      >
        Proceed to Checkout
      </Button>
    </Grid>
  );
};
