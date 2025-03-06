// prefix/resource: /sessions
import {get, post, put, del} from "../requests";

export const create = async (data = {}) => {
  try {
    const response = await post("auth", data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const refresh = async (data = {}) => {
  try {
    const response = await get("auth/refresh",data || {
      refresh_token: localStorage.getItem('refresh_token')
    });
    return response;
  } catch (error) {
    throw error;
  }
}