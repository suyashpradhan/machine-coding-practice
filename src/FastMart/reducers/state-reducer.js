export const initialState = {
  products: [],
  sort: "",
  filters: {
    brand: [],
    outOfStock: false,
    fastDelivery: true,
  },
  clearFilter: {
    brand: [],
    outOfStock: false,
    fastDelivery: true,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "LOW_TO_HIGH":
      return {
        ...state,
        sort: action.payload,
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        sort: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        sort: "",
        clearFilter: {
          brand: [],
          outOfStock: false,
          fastDelivery: true,
        },
      };

    default:
      return state;
  }
};
