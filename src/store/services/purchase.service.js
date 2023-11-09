import axios from "axios";

export const postPurchaseService = async (purchaseData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_PURCHASES_URL}`,
    purchaseData
  );
  return response.data;
};
