import axios from"axios"
const axiosInstance = axios.create({
  baseURL:"https://amazon-clone-api-o5a9.onrender.com",
});
export {axiosInstance};
