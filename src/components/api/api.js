import axios from "axios";

const api = axios.create({
  APIURL: "http://localhost:5000/api", // change to your backend domain
});

export default api;
