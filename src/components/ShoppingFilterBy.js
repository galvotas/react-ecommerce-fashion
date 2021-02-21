import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    borderBottom: "1px solid #d3d3d3",
    width: "100%",
  },
  subtitle: {
    paddingBottom: "0.5rem",
  },
});

export const ShoppingFilterBy = ({ filteroption }) => {
  const classes = useStyles();
  return (
    <Grid filteroption={filteroption} item className={classes.root}>
      <Typography variant="subtitle2" className={classes.subtitle}>
        {filteroption}
      </Typography>
    </Grid>
  );
};
