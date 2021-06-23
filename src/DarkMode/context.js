import { useReducer } from "react";
import { useContext, createContext } from "react";
import { reducer } from "./reducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { darkMode: false });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
