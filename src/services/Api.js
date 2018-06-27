import axios from "axios";
import { authUrl } from "./Constants";

export const authenticate = () => {
  const authOptions = {
    method: "GET",
    url: authUrl,
    headers: {
      "Allow-Control-Allow-Origin:": " *"
    }
  };
  return axios(authOptions)
    .then(response => {
      console.log("fetching ended", response);
    })
    .catch(error => {
      console.log("fetching error", error);
    });
};
