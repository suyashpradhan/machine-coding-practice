import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://products.suyashpradhan.repl.co",
  timeout: 10000,
});

axiosInstance.interceptors.request.use((request) => {
  console.log(request);

  request.headers.Authorization = "FAKETOKEN";

  return request;
});

export default axiosInstance;
