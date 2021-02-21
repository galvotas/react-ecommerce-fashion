import React from "react";
import { Drawer } from "@material-ui/core";
import { Cart } from "./Cart";

export const TemporaryDrawer = ({ handleDrawer, openDrawer }) => {
  return (
    <Drawer anchor="left" open={openDrawer} onClose={handleDrawer}>
      <Cart />
    </Drawer>
  );
};
