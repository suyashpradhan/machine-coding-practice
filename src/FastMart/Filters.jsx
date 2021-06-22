import { useStateContext } from "./context/state-context";

export function Filters() {
  const { dispatch } = useStateContext();
  return (
    <form>
      <legend>
        <label htmlFor="">Out of Stock</label>
        <input type="checkbox" value="Out of Stock"></input>
      </legend>
      <legend>
        <label htmlFor="">Fast Delivery</label>
        <input type="checkbox" value="Fast Delivery"></input>
      </legend>

      <button type="button" onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
        Clear Filters
      </button>
    </form>
  );
}
