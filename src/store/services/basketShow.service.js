import axios from "axios";

export const getBasket = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASKETS_URL}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const deleteBasketFromAPI = async (id) => {
  try {
    await axios.delete(`${import.meta.env.VITE_APP_BASKETS_URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to delete from basket");
  }
};

export const clearAllBasketsFromAPI = async () => {
  try {
    await axios.delete("http://localhost:3000/basket");
  } catch (error) {
    throw new Error("Failed to clear all baskets");
  }
};
