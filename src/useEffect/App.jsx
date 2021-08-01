import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setData(response.data);
  }, []);

  return (
    <div>
      <h1>useEffect in Detail</h1>

      <h3>{data.title}</h3>
    </div>
  );
};

export default App;
