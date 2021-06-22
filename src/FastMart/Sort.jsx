import { useStateContext } from "./context/state-context";

export function Sort() {
  const { state, dispatch } = useStateContext();

  const sortFilters = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "HIGH_TO_LOW", payload: e.target.value });
    }
  };

  return (
    <select onChange={(e) => sortFilters(e)} value={state.sort}>
      <option value="low_to_high">Low to High</option>
      <option value="high_to_low">High to Low</option>
    </select>
  );
}
