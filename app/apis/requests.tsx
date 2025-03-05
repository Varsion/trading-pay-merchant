import actionInstance from "./actionInstance";

export const get = async (url: string, params = {}) => {
  try {
    const response = await actionInstance.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export const post = async (url: string, data = {}) => {
  try {
    const response = await actionInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const put = async (url: string, data = {}) => {
  try {
    const response = await actionInstance.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export const del = async (url: string) => {
  try {
    const response = await actionInstance.delete(url);
    return response;
  } catch (error) {
    throw error;
  }
}
