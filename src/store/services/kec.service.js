import axios from "axios";

export const getKecService = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_KEC_URL}?kota_id=${id}&api_key=${
        import.meta.env.VITE_APP_API_KEY_URL
      }`
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
