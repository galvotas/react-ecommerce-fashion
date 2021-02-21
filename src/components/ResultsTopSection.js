import React, { useState } from "react";
import { Grid, Typography, FormControl, Select } from "@material-ui/core";
import { useProducts } from "../contexts/ResultsContext";

export const ResultsTopSection = () => {
  const { state, dispatch } = useProducts();
  const [sortBy, setSortBy] = useState("");

  const handleChange = async (event) => {
    await setSortBy(event.target.value);
    await dispatch({ type: event.target.value });
  };

  return (
    <>
      <Grid container item justify="space-between" alignItems="center">
        <Grid item container xs={6}>
          <Typography variant="subtitle1" component="span">
            <Typography variant="h6" component="span">
              {state.products.length}
            </Typography>{" "}
            Items matches Criteria
          </Typography>
        </Grid>
        <Grid item container xs={6} justify="flex-end">
          <Typography variant="body1" style={{ marginRight: "0.8rem" }}>
            Sort By
          </Typography>
          <FormControl>
            <Select
              native
              value={sortBy}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"PRICE_LOW_HIGH"}>Price Low-High</option>
              <option value={"PRICE_HIGH_LOW"}>Price High-Low</option>
              <option value={"NAME"}>Name</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
