import axios from"axios"
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-0az0.onrender.com",
});
export {axiosInstance};
