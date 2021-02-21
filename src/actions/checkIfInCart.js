export const checkIfInCart = (arr, itemid) => {
  const finditem = arr.find((a) => a.id === itemid);
  return finditem ? true : false;
};
