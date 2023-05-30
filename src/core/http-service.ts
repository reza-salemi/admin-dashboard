import axios from "axios";

const BASE_URL = "https://react-mini-projects.classbon.com";

export const httpService = axios.create({
  baseURL: BASE_URL,
});
