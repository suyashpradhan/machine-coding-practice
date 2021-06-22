import { useEffect } from "react";
import { Filters } from "./Filters";
import { Sort } from "./Sort";
import axios from "axios";
import { useStateContext } from "./context/state-context";
import { Product } from "./Product";
import "./index.css";
import { DataSort } from "./DataFilter";

export const App = () => {
  const { state, dispatch } = useStateContext();

  const sortedData = DataSort(state, state.products);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://yoga-store-api-suyashpradhan.vercel.app/products"
        );
        if (response.status === 200) {
          dispatch({ type: "SET_PRODUCTS", payload: response.data });
        }
      } catch (e) {
        return e.response;
      }
    })();
  }, []);

  return (
    <div>
      <h1>Shop Here</h1>
      <Sort />
      <Filters />
      <div className="App">
        {sortedData.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
