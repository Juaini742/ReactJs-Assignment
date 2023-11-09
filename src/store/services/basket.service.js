import axios from "axios";

export const saveBasketToAPI = async (basketData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASKETS_URL}`,
      basketData
    );
    return response.data;
  } catch (error) {
    throw new Error("Gagal menyimpan data ke keranjang");
  }
};
