import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_PRODUCTS_URL}`);
  return response.data;
};
