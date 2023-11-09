import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_PRODUCTS_URL}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
