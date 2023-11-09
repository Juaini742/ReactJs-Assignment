import axios from "axios";

export const getKabService = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_KAB_URL}?provinsi_id=${id}&api_key=${
      import.meta.env.VITE_APP_API_KEY_URL
    }`
  );
  return response.data;
};
