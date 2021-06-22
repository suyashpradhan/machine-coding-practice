import axios from "axios";

//Default Config
const axiosConfig = axios.create({
  baseURL: "https://yoga-play-api.vercel.app/videos",
  timeout: 10000,
  timeoutErrorMessage: "Server Timeout!!! Please Try Again Later",
  headers: { "api-key": "af4t8gauav9aabe6" },
});

const requestHandler = (request) => {
  request.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs";

  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    window.location("/login");
  }
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

axiosConfig.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosConfig.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default axiosConfig;
