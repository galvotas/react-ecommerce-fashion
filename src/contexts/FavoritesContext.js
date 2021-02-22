import React, { useReducer, createContext, useContext, useEffect } from "react";

export const FavoriteItemsContext = createContext();

let initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const ifExists = state.find((el) => el.id === action.product.id);
      if (!ifExists) {
        return [...state, action.product];
      } else {
        return [...state];
      }
    case "REMOVE_FROM_FAVORITES":
      return [...state.filter((a) => a.id !== action.pr.id)];
    case "RENEW_STATE":
      return [...action.getItems];
    default:
      throw new Error();
  }
};

export const FavoritesContext = ({ children }) => {
  const [favprods, dispatchFavs] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favprods));
  }, [favprods]);

  return (
    <FavoriteItemsContext.Provider value={{ dispatchFavs, favprods }}>
      {children}
    </FavoriteItemsContext.Provider>
  );
};

export const useFavoriteProducts = () => useContext(FavoriteItemsContext);
