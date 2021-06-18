//https://randomuser.me/api/

import axios from "axios";
import { useEffect, useState } from "react";

//Fetch Data OnLoad Once[3Min]

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://randomuser.me/api/");
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        return error.response.data;
      }
    })();
  }, []);

  return (
    <div>
      <h1>#01 Fetch Data</h1>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((data) => {
            return (
              <div key={data.id.value}>
                <h2>{data.cell}</h2>
                <h3>{data.name.title}</h3>
                <h2>{data.name.first}</h2>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
