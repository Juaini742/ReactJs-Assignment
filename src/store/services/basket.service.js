import axios from "axios";

export const saveBasketToAPI = async (basketData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_BASKETS_URL}`,
    basketData
  );
  return response.data;
};
