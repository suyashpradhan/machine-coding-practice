import { useEffect } from "react";
import axios from "./AxiosConfig";

export const Axios = () => {
  useEffect(() => {
    (async () => {
      const reponse = await axios.get("https://yoga-play-api.vercel.app/");
      console.log(reponse);
    })();
  }, []);

  return (
    <div>
      <h1>axios using interceptors</h1>
      <br />
      <button>Get Data</button>
    </div>
  );
};
