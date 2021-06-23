export const reducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return {
        darkMode: true,
      };

    case "LIGHT_MODE":
      return { darkMode: false };

    default:
      return state;
  }
};
