import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const instance = axios.create({
  baseURL: BASE_URL,
});
