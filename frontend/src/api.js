import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API = axios.create({
  baseURL: "process.env.REACT_APP_API_URL",
});

export default API;
