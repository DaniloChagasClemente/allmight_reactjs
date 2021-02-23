import axios from "axios";

const api = axios.create({
  baseURL: "https://allmightsite.herokuapp.com/"
  //colocar a nossa url
})

export default api;
