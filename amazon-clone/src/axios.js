import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-lakshit-nexzon.cloudfunctions.net/api",
  // "http://127.0.0.1:5001/lakshit-nexzon/us-central1/api",
});

export default instance;
