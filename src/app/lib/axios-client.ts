import axios from "axios";
import { JsonHeader } from "./const";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const apiCall = async (
  method: any,
  urlEndPoint: string,
  data?: any,
  headers?: any
) => {
  const hraders = headers || JsonHeader;
  switch (method) {
    case "POST":
      return await axios
        .post(`${API_URL}/${urlEndPoint}`, data, {
          headers: hraders,
        })
        .then((response: any) => {
          return response.data;
        })
        .catch((err: any) => {
          console.log(err);
          return err;
        });
      break;
    case "GET":
      return await axios
        .get(`${API_URL}/${urlEndPoint}`, {
          headers: hraders,
        })
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
      break;
    case "PUT":
      return await axios
        .put(`${API_URL}/${urlEndPoint}`, data, {
          headers: hraders,
        })
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
      break;
    case "PATCH":
      return await axios
        .patch(`${API_URL}/${urlEndPoint}`, data, {
          headers: hraders,
        })
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
      break;
    case "DELETE":
      return await axios
        .delete(`${API_URL}/${urlEndPoint}`, {
          headers: hraders,
        })
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
      break;
    default:
      break;
  }
};
