import axios from "axios";

export const getQoutes = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_QOUTES_URL}`);
  return response.data;
};
