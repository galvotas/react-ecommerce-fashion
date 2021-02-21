import React, { useReducer, createContext, useContext } from "react";
import { products } from "../apis/products";

export const CartItemsContext = createContext();

let initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const findProduct = state.find((el) => el.id === action.product.id);

      if (!findProduct) {
        return [...state, { ...action.product, quantity: 1 }];
      }
      if (findProduct) {
        findProduct.quantity++;
        return [...state];
      }
    case "INCREMENT":
      const x = state.find((el) => el.id === action.productid);
      x.quantity++;
      return [...state];
    case "DECREMENT":
      const y = state.find((el) => el.id === action.productid);
      if (y.quantity === 1) {
        return [...state.filter((a) => a.id !== y.id)];
      } else {
        y.quantity--;
        return [...state];
      }

    case "REMOVE_FROM_CART":
      return [...state.filter((a) => a.id !== action.productid)];
    default:
      throw new Error();
  }
};

export const CartContext = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  console.log(cartItems);

  return (
    <CartItemsContext.Provider value={{ dispatch, cartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};

export const useCart = () => useContext(CartItemsContext);
