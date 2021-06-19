import axios from "axios";

export const Axios = () => {
  const handleData = async () => {
    try {
      const response = await axios.get(
        "https://yoga-play-api.vercel.app/videos"
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  /*   useEffect(() => {
    (async () => {
      try {
        const data = await handleData();
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);
 */
  return (
    <>
      <h1>Axios</h1>
      <button onClick={handleData}>Get Data</button>
    </>
  );
};
