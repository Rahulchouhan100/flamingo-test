import axios from "axios";
import { toast } from "react-toastify";
import config from "../config";
import { ERRORMSG } from "../utils/constant";

export const api = async (
  endpoint,
  data,
  type,
  jwttoken = "",
  msg = "",
  hideMsg = false,
  susMsg = true
) => {
  let response = { data: {} };
  let token;
  if (jwttoken) {
    token = jwttoken;
  } else {
    const userData = JSON.parse(localStorage.getItem("authUserData"));
    token = userData?.authToken;
  }
  let headers = { "Content-Type": "application/json" };
  try {
    switch (type) {
      case "post":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.post(
          `${config.API_URL}/${endpoint}`,
          { ...data },
          {
            headers,
          }
        );
        break;
      case "postWithoutToken":
        response = await axios.post(
          `${config.API_URL}/${endpoint}`,
          { ...data },
          { headers }
        );
        break;
      case "postMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.post(`${config.API_URL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "putMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.put(`${config.API_URL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "get":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.get(`${config.API_URL}/${endpoint}`, {
          headers,
        });
        break;
      case "put":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.put(`${config.API_URL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "patch":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.patch(`${config.API_URL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "patchMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.patch(`${config.API_URL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "delete":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.delete(`${config.API_URL}/${endpoint}`, {
          data,
          headers,
        });
        break;
      default:
        return true;
    }
    if (susMsg) response.data.success = true;
    if (type !== "get" && msg) {
      toast.success(msg);
    }
  } catch (error) {
    response.data.success = false;
    if (error && error.response) {
      if (!hideMsg) toast.error(error.response?.data?.message || ERRORMSG);
      if (error.response.status === 401 || error.response.status === 503) {
        // localStorage.clear();
        response = error.response;
        response.data.success = false;
        //window.location.reload();
      } else {
        response = error.response;
        response.data.success = false;
      }
    } else {
      if (!hideMsg) toast.error(ERRORMSG);
    }
  }
  return response?.data || response;
};
