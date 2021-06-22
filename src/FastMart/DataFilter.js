export const DataSort = (state, data) => {
  if (state.sort === "low_to_high") {
    return [...data].sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  if (state.sort === "high_to_low") {
    return [...data].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }

  return data;
};
