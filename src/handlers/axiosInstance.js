import axios from "axios";

const axiosInstance = (
  headersData = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  }
) => {
  let headers = headersData;

  const axiosInstance = axios.create({
    baseURL: "https://staging.api.chale.io/sanctum/csrf-cookie",
    withCredentials: true,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          resolve(error);
        });
      }
      //   if (error.response.status >= 500) {
      //     // snackbar("Oops something went wrong", "error");
      //   }
      //   if (error.response.status === 403 || error.response.status === 401) {
      //     // removeAuth();
      //   }
      if (error.response.data.errors) {
        let val = Object.values(error.response.data.errors);
        const errorMessages = [];
        val.map((error) => {
          errorMessages.push(error[0]);
        });
        console.log(errorMessages);
        // snackbar(errorMessages.toString(), "error");
      } else {
        console.log(error.response.data.message);
        // snackbar(error.response.data.message);
      }
      throw error;
    }
  );

  return axiosInstance;
};

export default axiosInstance;
