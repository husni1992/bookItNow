import axios from "axios";
import { authUrl, getRoomsUrl, roomsListMockData } from "./Constants";

export const authenticate = () => {
  const authOptions = {
    method: "GET",
    url: authUrl
  };
  return axios(authOptions)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log("fetching error", error);
    });
};

export const getRoomsList = ({ page, records, authToken }) => {
  const params = {
    page,
    records
  };

  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

  return fetch(`${getRoomsUrl}?${query}`, {
    method: "GET",
    headers: {
      "x-api-token": authToken
    }
  })
    .then(response => response.json()) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};
