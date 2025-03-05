// prefix/resource: /users
import {get, post, put, del} from "../requests";

export const create = async (data = {}) => {
  try {
    const response = await post("users", data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const update = async (data = {}) => {
  try {
    const response = await put("users", data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const destroy = async () => {
  try {
    const response = await del("users");
    return response;
  } catch (error) {
    throw error;
  }
}

export const show = async () => {
  try {
    const response = await get("users");
    return response;
  } catch (error) {
    throw error;
  }
}