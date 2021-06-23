import { useEffect } from "react";
import axiosInstance from "./AxiosInstance";
import { useState } from "react";

export const Axios = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/user");
      setData(response.data);
    })();
  }, []);

  return (
    <div>
      <h1>axios using interceptors</h1>
      <br />

      <br />
      <br />
      <h2>{data.user}</h2>
      <h5>{data.age}</h5>
    </div>
  );
};
