// prefix/resource: /sessions
import {get, post, put, del} from "../requests";

export const create = async (data = {}) => {
  try {
    const response = await post("sessions", data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const refresh = async (data = {}) => {
  try {
    const response = await get("sessions/refresh",data || {
      refresh_token: localStorage.getItem('refresh_token')
    });
    return response;
  } catch (error) {
    throw error;
  }
}