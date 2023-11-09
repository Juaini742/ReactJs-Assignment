import axios from "axios";

export const getPurchaseService = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_PURCHASES_URL}`);
  return response.data;
};
