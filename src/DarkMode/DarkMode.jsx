import { useTheme } from "./context";
import { Toggle } from "./Toggle";

export const DarkMode = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useTheme();

  const handleToggle = () => {
    if (darkMode) {
      dispatch({ type: "LIGHT_MODE" });
    } else {
      dispatch({ type: "DARK_MODE" });
    }
  };

  return <Toggle handleToggle={handleToggle} darkMode={darkMode}></Toggle>;
};
